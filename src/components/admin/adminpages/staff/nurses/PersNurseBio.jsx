const NurseBio = ({ nuRse }) => {
  return ( 
    <>
      <div className="prevAppInfo">
        <p>Field</p>
        <p>License Number</p>
        <p>Telephone</p>
        <p>Degree</p>
        <p>Date of Birth</p>
        <p>Status</p>
      </div>
      { nuRse.map((nurse) => (
        <div className="allAppointments" key={nurse.id}>
          <p>{nurse.areaOfSpecialization}</p>
          <p>{nurse.nurse_License_number}</p>
          <p>{nurse.number}</p>
          <p>{nurse.Nurse_Degree}</p>
          <p>{nurse.DOB}</p>
          <p>{nurse.employStat}</p>
        </div>
      ))}
    </>
   );
}
 
export default NurseBio;