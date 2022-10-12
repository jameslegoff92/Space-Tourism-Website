/*** Utility function to extract data from local json.file. ***/
function getData(param, array, req) {
  if (!array || !req) {
    console.log("Invalid Arguments");
  } else {
    let data, index, picture;
    
    picture = (param === "tech") ? "landscape" : "webp";

    const dataArray = array;
    const urlRouteParameter = req;

    for (let i = 0; i < dataArray.length; i++) {
      if (dataArray[i].name.toLowerCase() === urlRouteParameter) {
        data = dataArray[i];
        index = i + 1;
        break;
      }
    }

    let {
      name = null,
      images: { [picture]: image },
      description = null,
      distance = null,
      travel = null,
      role = null,
      bio = null,
    } = data;

    image = image.substr(1);

    let obj = {
      index,
      name,
      image,
      description,
      distance,
      travel,
      role,
      bio
    };

    return obj;
  }
}

module.exports = getData;
