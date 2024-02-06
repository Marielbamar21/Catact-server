import { hashtagController } from "../controller/hashtagController.js";
import { Router } from "express";

const router = Router();

    router.post('/createHashtag',hashtagController.createHashtag)
        .get('/allHashtag', hashtagController.getAllHashtag)
        .get('/:id_hashtag', hashtagController.getHashtag)
        .delete('/deleteHashtag/:id_hashtag', hashtagController.deleteHashtag)

export const hashtagRouter = router;