const { process_params } = require('express/lib/router');
const { Thought } = require('../models/Thought');
const User = require('../models/User');

const thoughtController = {
    getAllThoughts(req, res) {
        Thought.find({})
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    
    getThoughtById({ prams }, res) {
        Thought.findOne({ _id: process_params.thoughtId })
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No Thought with this ID'});
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
}