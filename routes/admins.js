const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const AdminModel = require("../models/Admin.model");
const AgencyDirectorModel = require("../models/AgencyDirector.model");
const AssociateAgencyDirectorModel = require("../models/AssociateAgencyDirector.model");
const AgencySupervisorModel = require("../models/AgencySupervisor.model");
const ProbationalTeamLeaderModel = require("../models/ProbationalTeamLeader.model");
const TeamLeaderModel = require("../models/TeamLeader.model");
const AgentModel = require("../models/Agent.model");
const bcrypt = require("bcrypt");
const roles = require("../data/roles");

//Get all admins
router.get("/", async (req, res) => {
  try {
    const AdminList = await AdminModel.find()
      .select("-passwordHash")
      .select("-role");
    return res.status(200).send({ message: AdminList, success: true });
  } catch (error) {
    return res.send({ error: error, success: false, err: "error here" });
  }
});

//Delete one admin
router.delete("/:id", async (req, res) => {
  try {
    const admin = await AdminModel.find({ _id: req.params.id });
    if (!admin) return res.send({ error: "Admin not found", success: false });

    AdminModel.findByIdAndDelete(req.params.id)
      .then((adminDeleted) => {
        res.status(200).json({
          message: `${adminDeleted.firstName} deleted`,
          success: true,
        });
      })
      .catch((error) => {
        res.json({ error: error, success: false });
      });
  } catch (error) {
    return res.json({ error: error, success: false });
  }
});

//Register admin
router.post("/register", async (req, res) => {
  try {
    //check if account exists
    const adminExists = await AdminModel.findOne({ email: req.body.email });
    const agencyDirectorExists = await AgencyDirectorModel.findOne({
      primaryEmail: req.body.email,
    });
    const associteAgencyDirectorExists =
      await AssociateAgencyDirectorModel.findOne({
        primaryEmail: req.body.email,
      });
    const agencySupervisorExists = await AgencySupervisorModel.findOne({
      primaryEmail: req.body.email,
    });
    const teamLeaderExists = await TeamLeaderModel.findOne({
      primaryEmail: req.body.email,
    });
    const probationalTeamLeaderExists =
      await ProbationalTeamLeaderModel.findOne({
        primaryEmail: req.body.email,
      });
    const agentExists = await AgentModel.findOne({
      primaryEmail: req.body.email,
    });

    if (
      !req.body.firstName ||
      !req.body.lastName ||
      !req.body.phone ||
      !req.body.email ||
      !req.body.password
    ) {
      return res.status(400).send({
        error: `Please add all the required fields`,
        success: false,
      });
    }
    if (
      adminExists ||
      agencyDirectorExists ||
      agencySupervisorExists ||
      teamLeaderExists ||
      probationalTeamLeaderExists ||
      agentExists
    ) {
      return res.status(400).send({
        error: `Email already in use, Please try with different email`,
        success: false,
      });
    }

    // Encrypt password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const admin = new AdminModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      role: roles.admin,
      passwordHash: hashedPassword,
    });

    admin
      .save()
      .then((adminSaved) => {
        res.status(201).json({
          message: `${adminSaved.firstName} has been saved`,
          success: true,
        });
      })
      .catch((error) => {
        res.json({ error: error.message, success: false });
      });
  } catch (error) {
    res.json({ error: error.message, success: false });
  }
});

module.exports = router;
