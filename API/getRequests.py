import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import sys
# print(sys.path)


cred = credentials.Certificate('service.json')

firebase_admin.initialize_app(cred, {'databaseURL': 'https://uscrm-app.firebaseio.com/'})

ref = db.reference('/')




def getRequests():
    print(db.reference("requests/").get())
getRequests()
