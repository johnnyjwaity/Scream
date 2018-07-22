import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import sys



cred = credentials.Certificate('service.json')

firebase_admin.initialize_app(cred, {'databaseURL': 'https://uscrm-app.firebaseio.com/'})

ref = db.reference('/')

def addRequest(lat, lng):
    print(db.reference("requests/").push({'lat':lat,
                                          'lng':lng,
                                          'status':'NO'}).key)
addRequest(sys.argv[1], sys.argv[2])

