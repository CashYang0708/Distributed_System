import socket, sys

host = "127.0.0.1"
port = 20213
msg = b"This is a test from python client"
#bytesToSend = str.encode(msg)
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.connect((host, port))
s.send(msg)

while 1:
  print("Looking for replies; press Ctrl-C or Ctrl-Break to stop.")
  buf = s.recv(1024)
  if not len(buf):
    break
  print("Server replies: ")
  sys.stdout.write(buf.decode('utf-8'))
  print("\n")
s.close()