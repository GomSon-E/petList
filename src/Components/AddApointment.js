import React,{useState} from 'react'
import {BiCalendarPlus} from 'react-icons/bi'

function AddWrite({toggleForm, formData, setFormData, formDataPublish}){
    if(!toggleForm){return null}
   return (
    <>
            <ul>
                <li>
                    <label htmlFor="userName">집사명</label>
                    <input type="text" id="userName" 
                    onChange={(event) => {
                        setFormData({...formData, ownerName:event.target.value})
                    }}
                    />
                </li>
                <li>
                    <label htmlFor="userChildren">애기이름</label>
                    <input type="text" id="userChildren"
                    onChange={(event) => {
                        setFormData({...formData, petName:event.target.value})
                    }}
                    />
                </li>
                <li>
                    <label htmlFor="userDate">예약일</label>
                    <input type="date" id="userDate" 
                    onChange={(event) => {
                        setFormData({...formData, aptDate:event.target.value})
                    }}
                    />
                </li>
                <li>
                    <label htmlFor="userTime">예약시간</label>
                    <input type="time" id="userTime" 
                    onChange={(event) => {
                        setFormData({...formData, aptTime:event.target.value})
                    }}/>
                </li>
                <li>
                    <label htmlFor="useDes">기타설명</label>
                    <textarea
                        cosl="30" rows="10"
                        placeholder="기타설명"
                        id="useDes"
                        onChange={(event) => {
                            setFormData({...formData, aptNotes:event.target.value})
                        }}
                        ></textarea>
                </li>
            </ul>
            <p>
                <button 
                    type="submit"
                    onClick={formDataPublish}
                >제출</button>
            </p>
    </>
   ) 
}

function AddApointment({onSendAppointment, lastId}){
    // 기본 비어있는 객체 -> reset에도 사용함
    const clearData = {
        petName: "",
        ownerName: "",
        aptNotes: "",
        aptDate: ""
    }
    // state
    const [toggleForm, setToggleForm] = useState(false)
    const [formData, setFormData] = useState(clearData)

    function formDataPublish() {
        // 보낼 객체
        const appointmentInfo = {
            id: lastId + 1,
            petName: formData.petName,
            ownerName: formData.ownerName,
            aptNotes: formData.aptNotes,
            aptDate: formData.aptDate + " " + formData.aptTime
        }
        // 데이터 보내기
        onSendAppointment(appointmentInfo)
        // 토글, 리셋
        setToggleForm(!toggleForm)
        setFormData(clearData)
    }

    return (
        <div id="appoint">
         <h4 onClick={()=>{setToggleForm(!toggleForm)}}>
            <BiCalendarPlus />
            예약하기</h4>
            <AddWrite
                toggleForm={toggleForm}
                formData={formData}
                formDataPublish={formDataPublish}
                setFormData={setFormData} />
         </div>
    )
}

export default AddApointment
// 32