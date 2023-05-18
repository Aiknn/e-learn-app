class CourseModel {
    id: number;
    title: string;
    author?: string;
    description?: string;
    category?: string;
    img?: string;
    video?: string;

    constructor (id: number, title: string, author: string, description: string, category: string, img: string, video: string) {
            this.id = id;
            this.title = title;
            this.author = author;
            this.description = description;
            this.category = category;
            this.img = img;
            this.video = video;
    }
}

export default CourseModel;