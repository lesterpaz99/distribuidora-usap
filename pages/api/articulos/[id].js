export default function handler(req, res) {
	return res.status(200).json('getting one article: ' + req.query.id);
}
