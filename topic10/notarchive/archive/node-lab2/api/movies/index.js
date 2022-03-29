import express from 'express';
import { movies, movieReviews, movieDetails } from './moviesData';
import {NotFound} from './../../responses';
import uniqid from 'uniqid';

const router = express.Router();
router.get('/', (req, res) => {
    res.status(200).json(movies);
});

// Get a movie
// Get movie details
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (movieDetails.id == id) {
        res.status(200).json(movieDetails);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});

// Get movie reviews
router.get('/:id/reviews', (req, res) => {
    const id = parseInt(req.params.id);
    // find reviews in list
    if (movieReviews.id == id) {
        res.status(200).json(movieReviews);
    } else {
        res.status(404).json(NotFound);
    }
});

//Post a movie review
router.post('/:id/reviews', (req, res) => {
    const id = parseInt(req.params.id);
    // find reviews in list
    if (movieReviews.id == id) {
        req.body.created_at = new Date();
        req.body.updated_at = new Date();
        req.body.id = uniqid();

        movieReviews.results.push(req.body);
        res.status(201).json(req.body);
    } else {
        res.status(404).json(NotFound);
    }
});

export default router;