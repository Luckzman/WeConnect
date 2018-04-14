import business from '../model/business';

const Business = {
  listAll(req, res) {
    res.status(200).json(business);
  },
  create(req, res) {
    const businessInput = {
      id: req.body.id,
      name: req.body.name,
      product: req.body.product,
      address: req.body.address,
      phone: req.body.phone,
      category: req.body.category,
      location: req.body.location,
      image: req.body.image,
    };
    business.push(businessInput);
    res.status(201).json({
      Business: businessInput,
    });
  },
  listSingle(req, res) {
    for (let i = 0; i < business.length; i += 1) {
      if (business[i].id === parseInt(req.params.id, 10)) {
        return res.status(200).json(business[i]);
      }
    }
    return res.status(404).json({
      message: 'Not Found',
    });
  },
  update(req, res) {
    for (let i = 0; i < business.length; i += 1) {
      if (business[i].id === parseInt(req.params.id, 10)) {
        business[i].name = req.body.name || business[i].name;
        business[i].product = req.body.product || business[i].product;
        business[i].address = req.body.address || business[i].address;
        business[i].phone = req.body.phone || business[i].phone;
        business[i].location = req.body.location || business[i].location;
        business[i].category = req.body.category || business[i].category;
        business[i].image = req.body.image || business[i].image;
        return res.status(200).json(business[i]);
      }
    }
    return res.status(400).json({
      message: 'update not successful',
    });
  },
  delete(req, res) {
    for (let i = 0; i < business.length; i += 1) {
      if (business[i].id === parseInt(req.params.id, 10)) {
        business.splice(i, 1);
        return res.status(200).json({
          message: 'business was successfully deleted',
        });
      }
    }
    return res.status(400).json({
      message: 'delete request not successful',
    });
  },
};

export default Business;
