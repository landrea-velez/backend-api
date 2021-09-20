const { Router } = require("express");
const { ParseIntMiddleware, AuthMiddleware } = require("../middlewares");

module.exports = function ({ IdeaController }) {
  const router = Router();

  router.get("", [ParseIntMiddleware], IdeaController.getAll);
  router.get("/:ideaId", IdeaController.get);
  router.patch("/:ideaId", AuthMiddleware, IdeaController.update);
  router.delete("/:ideaId", AuthMiddleware, IdeaController.delete);
  router.post("", IdeaController.create);
  router.get("/:userId/all", IdeaController.getUserIdeas);
  router.post("/:ideaId/upvote", AuthMiddleware, IdeaController.upvoteIdea);
  router.post("/:ideaId/downvote", AuthMiddleware, IdeaController.downvoteIdea);

  return router;
};
