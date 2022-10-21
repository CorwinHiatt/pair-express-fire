import dbConnect from "./dbConnect.js" 





export function createClothing(req, res) {
    
    const db = dbConnect()
    
    db.collection('clothing').add(req.body)
    
        .then(doc => res.status(201).send({ success: true, message: 'Created clothing: ' + doc.id }))
        .catch(err => res.send.status(500).send({success: false, message: err}))

}