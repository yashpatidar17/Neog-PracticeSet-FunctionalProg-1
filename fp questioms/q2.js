const videoJSON = {
    "videos": [
      {
        "id": 1,
        "title": "Introduction to JavaScript",
        "description": "Learn the basics of JavaScript programming",
        "length": "2:30",
        "category": "Programming",
        "views": 1000,
        "likes": 200,
        "dislikes": 10,
        "comments": [
          {
            "user": "John",
            "comment": "Great tutorial!"
          },
          {
            "user": "Sarah",
            "comment": "Thanks for the help!"
          }
        ]
      },
      {
        "id": 2,
        "title": "Introduction to HTML",
        "description": "Learn the basics of HTML programming",
        "length": "3:00",
        "category": "Web Development",
        "views": 1500,
        "likes": 300,
        "dislikes": 20,
        "comments": [
          {
            "user": "David",
            "comment": "Awesome tutorial!"
          },
          {
            "user": "Emily",
            "comment": "Really helpful, thanks!"
          }
        ]
      },
      {
        "id": 3,
        "title": "Introduction to CSS",
        "description": "Learn the basics of CSS programming",
        "length": "4:00",
        "category": "Web Development",
        "views": 2000,
        "likes": 400,
        "dislikes": 30,
        "comments": [
          {
            "user": "Mike",
            "comment": "Great job, keep it up!"
          },
          {
            "user": "Jennifer",
            "comment": "Excellent tutorial, thank you!"
          }
        ]
      }
    ]
  }
//[{ "1" : ["Great tutorial!", "Thanks for the help!"] }, ...] 
  const newArray = arr => arr.reduce((newarr,curr)=>([...newarr,{[curr.id]:curr.comments.reduce((newarr,curr)=>([...newarr,curr?.comment]),[])}]),[])
  console.log(newArray(videoJSON.videos))

  

//   console.log(videoJSON.videos[1].comments.reduce((newarr,curr)=>([...newarr,curr?.comment]),[]))


// const getSum = (acc,curr) => acc + curr;
// const getAverageGrade = grades => grades.reduce(getSum,0)/grades.length;
// const findStudentWithAverageGradeAtLeast90 = (acc, { name, grades }) => (getAverageGrade(grades) >= 90) ? [...acc, { name, averageGrade: getAverageGrade(grades) }] : acc;