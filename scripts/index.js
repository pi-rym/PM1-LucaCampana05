class Activity {
    constructor(id, title, imgUrl) {
    this.id = id;
    this.title = title;
    this.descripcion = descripcion;
    this.imgUrl = imgUrl;
    }
}

class repository {
    constructor() {
        this.Activity = [];
        this.cont = 1;
    }
    getAllActivities() {
        return this.Activity;
    }

    createActivity(object) {
        var newActivity = new Activity(this.Activity.length + 1, object.title, object.description, object.imgUrl);
        
        this.nextId++;

        this.Activity.push(newActivity)
    }
}
const object = {
    title: "titulo",
    description: "description",
    imgUrl: "imgUrl"
}
repository.createActivity(object)

console.log(repository.getAllActivities()) [ Activity { nextId: 1, title: "titulo", description: "Description" imgUrl: "imgUrl"}]

repository.createActivity(object)

console.log(repository.getAllActivities())

