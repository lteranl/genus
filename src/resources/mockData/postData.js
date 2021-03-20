import girl from "../girl.jpg";
import pom from "../pom.jpg";
const posts = [
    {
        id: 1,
        avatarImage: girl,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        date: new Date(),
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula, urna in pharetra egestas, erat nulla sagittis elit, vel aliquam leo velit eu orci. Phasellus tempus dignissim dolor a varius. Duis at justo sed orci luctus fringilla. Phasellus dapibus libero nisl. Curabitur vitae arcu et ante luctus tincidunt sed vel tellus.",
        likes: "570",
        shares: "49",
        comments: ["NICE!", "good job"],
    },
    {
        id: 2,
        avatarImage: pom,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        date: new Date(),
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula, urna in pharetra egestas, erat nulla sagittis elit, vel aliquam leo velit eu orci. Phasellus tempus dignissim dolor a varius. Duis at justo sed orci luctus fringilla. Phasellus dapibus libero nisl. Curabitur vitae arcu et ante luctus tincidunt sed vel tellus.",
        likes: "20",
        shares: "4",
        comments: ["way to go!", "good job"],
    },
    {
        id: 3,
        avatarImage: pom,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        date: new Date(),
        text:
            "Lorem ipsum dolor sit amet, Curabitur vitae arcu et ante luctus tincidunt sed vel tellus.",
        likes: "5",
        shares: "0",
        comments: ["cool!", "good job"],
    },
];

export default posts;
