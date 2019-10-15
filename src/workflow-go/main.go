// package main

// import (
// 	// "fmt"
// 	"encoding/json"
// 	"net/http"
// 	"github.com/yokeshthirumoorthi/workflow-go/services"
// 	"github.com/yokeshthirumoorthi/workflow-go/utils"
// )

// func main() {
// 	http.HandleFunc("/faceDetect", func(rw http.ResponseWriter, req *http.Request) {
// 		albumName := req.URL.Query().Get("albumName")
// 		photoName := req.URL.Query().Get("photoName")
// 		message := utils.Message{
// 			AlbumName: albumName,
// 			PhotoName: photoName,
// 		}
// 		faces := services.DetectFaces(message)
// 		for index, boundingBox := range faces.Boxes {
// 			services.CropFace(message, boundingBox, index)
// 		}
// 		result, _ := json.Marshal(&faces)
// 		rw.WriteHeader(http.StatusOK)
//  	    rw.Write(result)
// 	})
// 	http.HandleFunc("/exif", func(rw http.ResponseWriter, req *http.Request) {
// 		albumName := req.URL.Query().Get("albumName")
// 		photoName := req.URL.Query().Get("photoName")
// 		message := utils.Message{
// 			AlbumName: albumName,
// 			PhotoName: photoName,
// 		}
// 		exif := services.Exif(message)
// 		result, _ := json.Marshal(&exif)
// 		rw.WriteHeader(http.StatusOK)
//  	    rw.Write(result)
// 	})
// 	http.HandleFunc("/resize", func(rw http.ResponseWriter, req *http.Request) {
// 		albumName := req.URL.Query().Get("albumName")
// 		photoName := req.URL.Query().Get("photoName")
// 		message := utils.Message{
// 			AlbumName: albumName,
// 			PhotoName: photoName,
// 		}
// 		services.Resize(message)
// 		// exif := services.Exif(message)
// 		// result, _ := json.Marshal(&exif)
// 		// rw.WriteHeader(http.StatusOK)
//  	    // rw.Write(result)
// 	})
// 	http.ListenAndServe(":1515", nil)
// }

package main

import (
	"encoding/json"
	"fmt"
	"log"

	"github.com/streadway/amqp"
	"github.com/yokeshthirumoorthi/workflow-go/services"
	"github.com/yokeshthirumoorthi/workflow-go/utils"
)

const (
	queueConnString = "amqp://queue:5672"
)

func failOnError(err error, msg string) {
	if err != nil {
		log.Fatalf("%s: %s", msg, err)
	}
}

func workflow(message utils.Message) {
	exif := services.Exif(message)
	fmt.Printf("Exif: %+v", exif)
	services.Resize(message)
	fmt.Println("Done Resizing")
	faces := services.DetectFaces(message)
	for index, boundingBox := range faces.Boxes {
		services.CropFace(message, boundingBox, index)
	}
}

func main() {
	conn, err := amqp.Dial(queueConnString)
	failOnError(err, "Failed to connect to RabbitMQ")
	defer conn.Close()

	ch, err := conn.Channel()
	failOnError(err, "Failed to open a channel")
	defer ch.Close()

	q, err := ch.QueueDeclare(
		"workflow_queue", // name
		false,            // durable
		false,            // delete when unused
		false,            // exclusive
		false,            // no-wait
		nil,              // arguments
	)
	failOnError(err, "Failed to declare a queue")

	msgs, err := ch.Consume(
		q.Name, // queue
		"",     // consumer
		true,   // auto-ack
		false,  // exclusive
		false,  // no-local
		false,  // no-wait
		nil,    // args
	)
	failOnError(err, "Failed to register a consumer")

	forever := make(chan bool)

	go func() {
		for d := range msgs {
			var message utils.Message
			err := json.Unmarshal([]byte(d.Body), &message)
			fmt.Println(err)
			log.Printf("Received a message: %s", d.Body)
			fmt.Printf("Received a message struct: %+v", message)
			workflow(message)
		}
	}()

	log.Printf(" [*] Waiting for messages. To exit press CTRL+C")
	<-forever
}
