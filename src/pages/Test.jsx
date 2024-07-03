const data  = {
  "_id": "65bd5453149572fe3b0a3748",
  "name": "John Doe",
  "matricNo": "CLI/2016/068",
  "details": [
    {
      "twoHundredLevel": [
        {
          "courseTitle": "Anatomy",
          "courseScore": 90,
          "courseGrade": "Distinction",
          "_id": "65bd5453149572fe3b0a374a"
        },
        {
          "courseTitle": "Physiology",
          "courseScore": 90,
          "courseGrade": "Distinction",
          "_id": "65bd5453149572fe3b0a374b"
        },
        {
          "courseTitle": "Biochemistry",
          "courseScore": 60,
          "courseGrade": "Pass",
          "_id": "65bd5453149572fe3b0a374c"
        }
      ],
      "threeHundredLevel": [
        {
          "courseTitle": "Anatomy",
          "courseScore": 67,
          "courseGrade": "Distinction",
          "_id": "65bd5453149572fe3b0a374d"
        },
        {
          "courseTitle": "Physiology",
          "courseScore": 90,
          "courseGrade": "Distinction",
          "_id": "65bd5453149572fe3b0a374e"
        },
        {
          "courseTitle": "Biochemistry",
          "courseScore": 60,
          "courseGrade": "Pass",
          "_id": "65bd5453149572fe3b0a374f"
        }
      ],
      "fourHundredLevel": [
        {
          "courseTitle": "Pathology",
          "courseScore": 85,
          "courseGrade": "Distinction",
          "_id": "65bd5453149572fe3b0a3750"
        },
        {
          "courseTitle": "Pharmacology",
          "courseScore": 90,
          "courseGrade": "Distinction",
          "_id": "65bd5453149572fe3b0a3751"
        }
      ],
      "fiveHundredLevel": [
        {
          "courseTitle": "Obstetrics and Gynaecology",
          "courseScore": 55,
          "courseGrade": "Pass",
          "_id": "65bd5453149572fe3b0a3752"
        },
        {
          "courseTitle": "Paediatrics",
          "courseScore": 77,
          "courseGrade": "Distinction",
          "_id": "65bd5453149572fe3b0a3753"
        },
        {
          "courseTitle": "Dermatology",
          "courseScore": 87,
          "courseGrade": "Distinction",
          "_id": "65bd5453149572fe3b0a3754"
        },
        {
          "courseTitle": "Mental health",
          "courseScore": 56,
          "courseGrade": "Pass",
          "_id": "65bd5453149572fe3b0a3755"
        }
      ],
      "sixHundredLevel": [
        {
          "courseTitle": "Medicine ",
          "courseScore": 90,
          "courseGrade": "Distinction",
          "_id": "65bd5453149572fe3b0a3756"
        },
        {
          "courseTitle": "Surgery",
          "courseScore": 90,
          "courseGrade": "Distinction",
          "_id": "65bd5453149572fe3b0a3757"
        },
        {
          "courseTitle": "Community Health",
          "courseScore": 67,
          "courseGrade": "Pass",
          "_id": "65bd5453149572fe3b0a3758"
        }
      ],
      "_id": "65bd5453149572fe3b0a3749",
      "studentElectives": []
    }
  ],
  "__v": 0
}


// const two =one.slice(0,-2).map(x => data.details[0][x])


const StudentDetails = () => {
  const classes = Object.keys(data.details[0]);
  return (
    <div>
  {classes.slice(0,-2).map((level, index) => (
      <div key={index}>
        <h2>{`${level} Level`}</h2>
        {data.details[0][level].map((course) => (
          <div key={course._id}>
            <p>Course Title: {course.courseTitle}</p>
            <p>Course Score: {course.courseScore}</p>
            <p>Course Grade: {course.courseGrade}</p>
          </div>
        ))}
      </div>
    ))}
    </div>
  );
};




export default StudentDetails