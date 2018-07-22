import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import sys



cred = credentials.Certificate('service.json')

firebase_admin.initialize_app(cred, {'databaseURL': 'https://uscrm-app.firebaseio.com/'})

ref = db.reference('/')




def checkRequest(req):
    print(db.reference("requests/"+req).child('status').get())
checkRequest(sys.argv[1])