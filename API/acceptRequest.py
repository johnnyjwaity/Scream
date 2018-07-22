import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import sys



cred = credentials.Certificate('service.json')

firebase_admin.initialize_app(cred, {'databaseURL': 'https://uscrm-app.firebaseio.com/'})

ref = db.reference('/')




def acceptRequest(req):
    db.reference("requests/"+req).update({'status':'YES'})
acceptRequest(sys.argv[1])