import React from 'react'

const CurrentDate = ({todos}) => {
  const today = new Date();
  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let curMonth = month[today.getMonth()];
  let dayWeek = week[today.getDay()];
  const formatDate = `${dayWeek}, ${today.getDate()} ${curMonth}`

  const taskCount = todos.length;

  return (
    <div>
        <h3 className='curdate'>{formatDate}</h3>
        <p className='taskCount'>{taskCount} tasks</p>
    </div>
  )
}

export default CurrentDate