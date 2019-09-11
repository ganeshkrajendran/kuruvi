# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: kuruvi.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='kuruvi.proto',
  package='kuruvi',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n\x0ckuruvi.proto\x12\x06kuruvi\"\x07\n\x05\x45mpty\"0\n\x0b\x41lbumFolder\x12\x11\n\talbumName\x18\x01 \x01(\t\x12\x0e\n\x06photos\x18\x03 \x03(\t\"\x17\n\x08PhotoURL\x12\x0b\n\x03url\x18\x01 \x01(\t\"g\n\x08\x45xifData\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x0c\n\x04make\x18\x02 \x01(\t\x12\r\n\x05model\x18\x03 \x01(\t\x12\x11\n\tcreate_on\x18\x04 \x01(\x05\x12\r\n\x05width\x18\x05 \x01(\x05\x12\x0e\n\x06height\x18\x06 \x01(\x05\"+\n\tJobStatus\x12\x0f\n\x07success\x18\x01 \x01(\x05\x12\r\n\x05\x65rror\x18\x02 \x01(\x05\"B\n\x0b\x42oundingBox\x12\t\n\x01x\x18\x02 \x01(\x02\x12\t\n\x01y\x18\x03 \x01(\x02\x12\r\n\x05width\x18\x04 \x01(\x05\x12\x0e\n\x06height\x18\x05 \x01(\x05\"3\n\rBoundingBoxes\x12\"\n\x05\x62oxes\x18\x01 \x03(\x0b\x32\x13.kuruvi.BoundingBox\"\x1c\n\nFacePoints\x12\x0e\n\x06points\x18\x01 \x03(\x02\"d\n\x10\x43ropFacesRequest\x12\x11\n\talbumName\x18\x01 \x01(\t\x12\x11\n\tphotoName\x18\x02 \x01(\t\x12*\n\rboundingBoxes\x18\x03 \x03(\x0b\x32\x13.kuruvi.BoundingBox2@\n\x08ServiceX\x12\x34\n\x0cinitWorkFlow\x12\x13.kuruvi.AlbumFolder\x1a\r.kuruvi.Empty\"\x00\x32S\n\x0fStaticGenerator\x12@\n\x18\x63reateStaticWebDirectory\x12\x13.kuruvi.AlbumFolder\x1a\r.kuruvi.Empty\"\x00\x32?\n\x08\x45xifCore\x12\x33\n\x0b\x65xtractExif\x12\x10.kuruvi.PhotoURL\x1a\x10.kuruvi.ExifData\"\x00\x32\x43\n\x07\x45xifApi\x12\x38\n\x0c\x65xififyAlbum\x12\x13.kuruvi.AlbumFolder\x1a\x11.kuruvi.JobStatus\"\x00\x32\x45\n\x07\x46\x61\x63\x65\x41pi\x12:\n\x0e\x63ropAlbumFaces\x12\x13.kuruvi.AlbumFolder\x1a\x11.kuruvi.JobStatus\"\x00\x32\x44\n\x08\x46\x61\x63\x65\x43ore\x12\x38\n\x0b\x64\x65tectFaces\x12\x10.kuruvi.PhotoURL\x1a\x15.kuruvi.BoundingBoxes\"\x00\x32J\n\x0c\x46\x61\x63\x65\x44\x65scribe\x12:\n\rdescribeFaces\x12\x13.kuruvi.AlbumFolder\x1a\x12.kuruvi.FacePoints\"\x00\x32\x46\n\x08\x46\x61\x63\x65\x43rop\x12:\n\tcropFaces\x12\x18.kuruvi.CropFacesRequest\x1a\x11.kuruvi.JobStatus\"\x00\x32\x45\n\tResizeApi\x12\x38\n\x0cresizePhotos\x12\x13.kuruvi.AlbumFolder\x1a\x11.kuruvi.JobStatus\"\x00\x32K\n\nStorageApi\x12=\n\x11saveFolderDetails\x12\x13.kuruvi.AlbumFolder\x1a\x11.kuruvi.JobStatus\"\x00\x32\x44\n\x08PgsqlApi\x12\x38\n\x0corganizeData\x12\x13.kuruvi.AlbumFolder\x1a\x11.kuruvi.JobStatus\"\x00\x62\x06proto3')
)




_EMPTY = _descriptor.Descriptor(
  name='Empty',
  full_name='kuruvi.Empty',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=24,
  serialized_end=31,
)


_ALBUMFOLDER = _descriptor.Descriptor(
  name='AlbumFolder',
  full_name='kuruvi.AlbumFolder',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='albumName', full_name='kuruvi.AlbumFolder.albumName', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='photos', full_name='kuruvi.AlbumFolder.photos', index=1,
      number=3, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=33,
  serialized_end=81,
)


_PHOTOURL = _descriptor.Descriptor(
  name='PhotoURL',
  full_name='kuruvi.PhotoURL',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='url', full_name='kuruvi.PhotoURL.url', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=83,
  serialized_end=106,
)


_EXIFDATA = _descriptor.Descriptor(
  name='ExifData',
  full_name='kuruvi.ExifData',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='kuruvi.ExifData.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='make', full_name='kuruvi.ExifData.make', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='model', full_name='kuruvi.ExifData.model', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='create_on', full_name='kuruvi.ExifData.create_on', index=3,
      number=4, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='width', full_name='kuruvi.ExifData.width', index=4,
      number=5, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='height', full_name='kuruvi.ExifData.height', index=5,
      number=6, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=108,
  serialized_end=211,
)


_JOBSTATUS = _descriptor.Descriptor(
  name='JobStatus',
  full_name='kuruvi.JobStatus',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='success', full_name='kuruvi.JobStatus.success', index=0,
      number=1, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='error', full_name='kuruvi.JobStatus.error', index=1,
      number=2, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=213,
  serialized_end=256,
)


_BOUNDINGBOX = _descriptor.Descriptor(
  name='BoundingBox',
  full_name='kuruvi.BoundingBox',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='x', full_name='kuruvi.BoundingBox.x', index=0,
      number=2, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='y', full_name='kuruvi.BoundingBox.y', index=1,
      number=3, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='width', full_name='kuruvi.BoundingBox.width', index=2,
      number=4, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='height', full_name='kuruvi.BoundingBox.height', index=3,
      number=5, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=258,
  serialized_end=324,
)


_BOUNDINGBOXES = _descriptor.Descriptor(
  name='BoundingBoxes',
  full_name='kuruvi.BoundingBoxes',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='boxes', full_name='kuruvi.BoundingBoxes.boxes', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=326,
  serialized_end=377,
)


_FACEPOINTS = _descriptor.Descriptor(
  name='FacePoints',
  full_name='kuruvi.FacePoints',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='points', full_name='kuruvi.FacePoints.points', index=0,
      number=1, type=2, cpp_type=6, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=379,
  serialized_end=407,
)


_CROPFACESREQUEST = _descriptor.Descriptor(
  name='CropFacesRequest',
  full_name='kuruvi.CropFacesRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='albumName', full_name='kuruvi.CropFacesRequest.albumName', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='photoName', full_name='kuruvi.CropFacesRequest.photoName', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='boundingBoxes', full_name='kuruvi.CropFacesRequest.boundingBoxes', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=409,
  serialized_end=509,
)

_BOUNDINGBOXES.fields_by_name['boxes'].message_type = _BOUNDINGBOX
_CROPFACESREQUEST.fields_by_name['boundingBoxes'].message_type = _BOUNDINGBOX
DESCRIPTOR.message_types_by_name['Empty'] = _EMPTY
DESCRIPTOR.message_types_by_name['AlbumFolder'] = _ALBUMFOLDER
DESCRIPTOR.message_types_by_name['PhotoURL'] = _PHOTOURL
DESCRIPTOR.message_types_by_name['ExifData'] = _EXIFDATA
DESCRIPTOR.message_types_by_name['JobStatus'] = _JOBSTATUS
DESCRIPTOR.message_types_by_name['BoundingBox'] = _BOUNDINGBOX
DESCRIPTOR.message_types_by_name['BoundingBoxes'] = _BOUNDINGBOXES
DESCRIPTOR.message_types_by_name['FacePoints'] = _FACEPOINTS
DESCRIPTOR.message_types_by_name['CropFacesRequest'] = _CROPFACESREQUEST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Empty = _reflection.GeneratedProtocolMessageType('Empty', (_message.Message,), {
  'DESCRIPTOR' : _EMPTY,
  '__module__' : 'kuruvi_pb2'
  # @@protoc_insertion_point(class_scope:kuruvi.Empty)
  })
_sym_db.RegisterMessage(Empty)

AlbumFolder = _reflection.GeneratedProtocolMessageType('AlbumFolder', (_message.Message,), {
  'DESCRIPTOR' : _ALBUMFOLDER,
  '__module__' : 'kuruvi_pb2'
  # @@protoc_insertion_point(class_scope:kuruvi.AlbumFolder)
  })
_sym_db.RegisterMessage(AlbumFolder)

PhotoURL = _reflection.GeneratedProtocolMessageType('PhotoURL', (_message.Message,), {
  'DESCRIPTOR' : _PHOTOURL,
  '__module__' : 'kuruvi_pb2'
  # @@protoc_insertion_point(class_scope:kuruvi.PhotoURL)
  })
_sym_db.RegisterMessage(PhotoURL)

ExifData = _reflection.GeneratedProtocolMessageType('ExifData', (_message.Message,), {
  'DESCRIPTOR' : _EXIFDATA,
  '__module__' : 'kuruvi_pb2'
  # @@protoc_insertion_point(class_scope:kuruvi.ExifData)
  })
_sym_db.RegisterMessage(ExifData)

JobStatus = _reflection.GeneratedProtocolMessageType('JobStatus', (_message.Message,), {
  'DESCRIPTOR' : _JOBSTATUS,
  '__module__' : 'kuruvi_pb2'
  # @@protoc_insertion_point(class_scope:kuruvi.JobStatus)
  })
_sym_db.RegisterMessage(JobStatus)

BoundingBox = _reflection.GeneratedProtocolMessageType('BoundingBox', (_message.Message,), {
  'DESCRIPTOR' : _BOUNDINGBOX,
  '__module__' : 'kuruvi_pb2'
  # @@protoc_insertion_point(class_scope:kuruvi.BoundingBox)
  })
_sym_db.RegisterMessage(BoundingBox)

BoundingBoxes = _reflection.GeneratedProtocolMessageType('BoundingBoxes', (_message.Message,), {
  'DESCRIPTOR' : _BOUNDINGBOXES,
  '__module__' : 'kuruvi_pb2'
  # @@protoc_insertion_point(class_scope:kuruvi.BoundingBoxes)
  })
_sym_db.RegisterMessage(BoundingBoxes)

FacePoints = _reflection.GeneratedProtocolMessageType('FacePoints', (_message.Message,), {
  'DESCRIPTOR' : _FACEPOINTS,
  '__module__' : 'kuruvi_pb2'
  # @@protoc_insertion_point(class_scope:kuruvi.FacePoints)
  })
_sym_db.RegisterMessage(FacePoints)

CropFacesRequest = _reflection.GeneratedProtocolMessageType('CropFacesRequest', (_message.Message,), {
  'DESCRIPTOR' : _CROPFACESREQUEST,
  '__module__' : 'kuruvi_pb2'
  # @@protoc_insertion_point(class_scope:kuruvi.CropFacesRequest)
  })
_sym_db.RegisterMessage(CropFacesRequest)



_SERVICEX = _descriptor.ServiceDescriptor(
  name='ServiceX',
  full_name='kuruvi.ServiceX',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=511,
  serialized_end=575,
  methods=[
  _descriptor.MethodDescriptor(
    name='initWorkFlow',
    full_name='kuruvi.ServiceX.initWorkFlow',
    index=0,
    containing_service=None,
    input_type=_ALBUMFOLDER,
    output_type=_EMPTY,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_SERVICEX)

DESCRIPTOR.services_by_name['ServiceX'] = _SERVICEX


_STATICGENERATOR = _descriptor.ServiceDescriptor(
  name='StaticGenerator',
  full_name='kuruvi.StaticGenerator',
  file=DESCRIPTOR,
  index=1,
  serialized_options=None,
  serialized_start=577,
  serialized_end=660,
  methods=[
  _descriptor.MethodDescriptor(
    name='createStaticWebDirectory',
    full_name='kuruvi.StaticGenerator.createStaticWebDirectory',
    index=0,
    containing_service=None,
    input_type=_ALBUMFOLDER,
    output_type=_EMPTY,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_STATICGENERATOR)

DESCRIPTOR.services_by_name['StaticGenerator'] = _STATICGENERATOR


_EXIFCORE = _descriptor.ServiceDescriptor(
  name='ExifCore',
  full_name='kuruvi.ExifCore',
  file=DESCRIPTOR,
  index=2,
  serialized_options=None,
  serialized_start=662,
  serialized_end=725,
  methods=[
  _descriptor.MethodDescriptor(
    name='extractExif',
    full_name='kuruvi.ExifCore.extractExif',
    index=0,
    containing_service=None,
    input_type=_PHOTOURL,
    output_type=_EXIFDATA,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_EXIFCORE)

DESCRIPTOR.services_by_name['ExifCore'] = _EXIFCORE


_EXIFAPI = _descriptor.ServiceDescriptor(
  name='ExifApi',
  full_name='kuruvi.ExifApi',
  file=DESCRIPTOR,
  index=3,
  serialized_options=None,
  serialized_start=727,
  serialized_end=794,
  methods=[
  _descriptor.MethodDescriptor(
    name='exififyAlbum',
    full_name='kuruvi.ExifApi.exififyAlbum',
    index=0,
    containing_service=None,
    input_type=_ALBUMFOLDER,
    output_type=_JOBSTATUS,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_EXIFAPI)

DESCRIPTOR.services_by_name['ExifApi'] = _EXIFAPI


_FACEAPI = _descriptor.ServiceDescriptor(
  name='FaceApi',
  full_name='kuruvi.FaceApi',
  file=DESCRIPTOR,
  index=4,
  serialized_options=None,
  serialized_start=796,
  serialized_end=865,
  methods=[
  _descriptor.MethodDescriptor(
    name='cropAlbumFaces',
    full_name='kuruvi.FaceApi.cropAlbumFaces',
    index=0,
    containing_service=None,
    input_type=_ALBUMFOLDER,
    output_type=_JOBSTATUS,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_FACEAPI)

DESCRIPTOR.services_by_name['FaceApi'] = _FACEAPI


_FACECORE = _descriptor.ServiceDescriptor(
  name='FaceCore',
  full_name='kuruvi.FaceCore',
  file=DESCRIPTOR,
  index=5,
  serialized_options=None,
  serialized_start=867,
  serialized_end=935,
  methods=[
  _descriptor.MethodDescriptor(
    name='detectFaces',
    full_name='kuruvi.FaceCore.detectFaces',
    index=0,
    containing_service=None,
    input_type=_PHOTOURL,
    output_type=_BOUNDINGBOXES,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_FACECORE)

DESCRIPTOR.services_by_name['FaceCore'] = _FACECORE


_FACEDESCRIBE = _descriptor.ServiceDescriptor(
  name='FaceDescribe',
  full_name='kuruvi.FaceDescribe',
  file=DESCRIPTOR,
  index=6,
  serialized_options=None,
  serialized_start=937,
  serialized_end=1011,
  methods=[
  _descriptor.MethodDescriptor(
    name='describeFaces',
    full_name='kuruvi.FaceDescribe.describeFaces',
    index=0,
    containing_service=None,
    input_type=_ALBUMFOLDER,
    output_type=_FACEPOINTS,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_FACEDESCRIBE)

DESCRIPTOR.services_by_name['FaceDescribe'] = _FACEDESCRIBE


_FACECROP = _descriptor.ServiceDescriptor(
  name='FaceCrop',
  full_name='kuruvi.FaceCrop',
  file=DESCRIPTOR,
  index=7,
  serialized_options=None,
  serialized_start=1013,
  serialized_end=1083,
  methods=[
  _descriptor.MethodDescriptor(
    name='cropFaces',
    full_name='kuruvi.FaceCrop.cropFaces',
    index=0,
    containing_service=None,
    input_type=_CROPFACESREQUEST,
    output_type=_JOBSTATUS,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_FACECROP)

DESCRIPTOR.services_by_name['FaceCrop'] = _FACECROP


_RESIZEAPI = _descriptor.ServiceDescriptor(
  name='ResizeApi',
  full_name='kuruvi.ResizeApi',
  file=DESCRIPTOR,
  index=8,
  serialized_options=None,
  serialized_start=1085,
  serialized_end=1154,
  methods=[
  _descriptor.MethodDescriptor(
    name='resizePhotos',
    full_name='kuruvi.ResizeApi.resizePhotos',
    index=0,
    containing_service=None,
    input_type=_ALBUMFOLDER,
    output_type=_JOBSTATUS,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_RESIZEAPI)

DESCRIPTOR.services_by_name['ResizeApi'] = _RESIZEAPI


_STORAGEAPI = _descriptor.ServiceDescriptor(
  name='StorageApi',
  full_name='kuruvi.StorageApi',
  file=DESCRIPTOR,
  index=9,
  serialized_options=None,
  serialized_start=1156,
  serialized_end=1231,
  methods=[
  _descriptor.MethodDescriptor(
    name='saveFolderDetails',
    full_name='kuruvi.StorageApi.saveFolderDetails',
    index=0,
    containing_service=None,
    input_type=_ALBUMFOLDER,
    output_type=_JOBSTATUS,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_STORAGEAPI)

DESCRIPTOR.services_by_name['StorageApi'] = _STORAGEAPI


_PGSQLAPI = _descriptor.ServiceDescriptor(
  name='PgsqlApi',
  full_name='kuruvi.PgsqlApi',
  file=DESCRIPTOR,
  index=10,
  serialized_options=None,
  serialized_start=1233,
  serialized_end=1301,
  methods=[
  _descriptor.MethodDescriptor(
    name='organizeData',
    full_name='kuruvi.PgsqlApi.organizeData',
    index=0,
    containing_service=None,
    input_type=_ALBUMFOLDER,
    output_type=_JOBSTATUS,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_PGSQLAPI)

DESCRIPTOR.services_by_name['PgsqlApi'] = _PGSQLAPI

# @@protoc_insertion_point(module_scope)