const express = require("express");
const contact = require("../models/contact");

const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const contactList = await contact.find({});
    res.status(200).json({ data: contactList, message: "Contact list !!" });
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, age, favoriteFoods } = req.body;

    const newContact = await contact.Create({
      name,
      age,
      favoriteFoods,
    });
    await newContact.save();
    res
      .status(201)
      .json({ data: newContact, message: "Contact created successfully!" });
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedContact = await Contact.findByIdAndUpdate(id, { ...req.body });
    const findContact = await Contact.findById(id);
    res.status(200).json({ data: findContact, mesage: "Contact updated !!" });
  } catch (error) {
    res.status(500).json({ message: error });
    console.log(error);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedContact = await Contact.findByIdAndDelete(id);
    res
    .status(200)
    .json({ data: deletedContact, message: "Contact deleted !!" });
  } catch (error) {
    res.status(500).json({ message: error });
    console.log(error);
  }
});

module.exports = router;
