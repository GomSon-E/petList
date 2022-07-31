import {BiTrash} from 'react-icons/bi'
// 목업 파일 -> fetch
function AppInfo({appointment,onDeleteAppoint}){
    return (
      <li>
        <dl>
            <dt>{appointment.petName}</dt>
            <dd className="owner">
                <dfn>예약자명</dfn>
                {appointment.ownerName}
            </dd>
            <dd className="desc">
                {appointment.aptNotes}
            </dd>
            <dd className="date">
                {appointment.aptDate}
            </dd>
        </dl>
        <p>
            <button
                onClick={ ()=> onDeleteAppoint(appointment.id)}>
                <BiTrash />
            </button>
        </p>
      </li>
    )
}

export default AppInfo