const handleCellSave = async (index, value) => {
  const updatedDetails = data.details[0].map((levelDetails) => {
    const updatedLevel = Object.entries(levelDetails).reduce(
      (acc, [level, courses]) => {
        if (levelDetails[level].some((course, i) => i === index)) {
          // Update the course score for the specific index
          const updatedCourses = levelDetails[level].map((course, i) =>
            i === index ? { ...course, courseScore: value } : course
          );
          // Ensure the courses are sorted alphabetically by course title
          updatedCourses.sort((a, b) =>
            a.courseTitle.localeCompare(b.courseTitle)
          );
          // Preserve other properties in the levelDetails object
          acc[level] = updatedCourses;
        } else {
          // Maintain other levels without changes
          acc[level] = levelDetails[level];
        }
        return acc;
      },
      {}
    );

    return { ...levelDetails, ...updatedLevel };
  });

  // Combine the updated details with the rest of the data
  const updatedData = { ...data, details: updatedDetails };

  // Dispatch the action to update selectedStudentData in Redux store
  dispatch(setSelectedStudentData(updatedData));
};
