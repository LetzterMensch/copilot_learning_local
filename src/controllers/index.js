class IndexController {
    constructor() {
        this.getIndex = this.getIndex.bind(this);
    }
    getIndex(req, res) {
        res.send('Welcome to the Express Server!');
    }
}

module.exports = IndexController;