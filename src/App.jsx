import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

// Layouts
import SignIn from "./components/SignIn";

// User Forms
import Adminform from "./components/userforms/Adminform";
import DoctorForm from "./components/userforms/DoctorForm";
import Labform from "./components/userforms/Labform";
import PharmForm from "./components/userforms/Pharmform";

// Admin Pages
import Header from "./components/admin/admincomponents/Header";
import AdminProfile from "./components/admin/admincomponents/AdminProfile";

// Registration pages
import Regdoc from "./components/admin/admincomponents/RegDoc";
import RegPharmacist from "./components/admin/admincomponents/RegPharmacist";
import RegNurse from "./components/admin/admincomponents/RegNurse";
import RegLab from "./components/admin/admincomponents/RegLab";
import RegDom from "./components/admin/admincomponents/RegDomWorker";

// Admin: Doc Pages
import AddDoctor from "./components/admin/adminpages/staff/doctor";
import DocBasicInfo from "./components/admin/adminpages/staff/doctor/docBasicInfo";
import DocEnterDetails from "./components/admin/adminpages/staff/doctor/docEnterDetails";
import DocServices from "./components/admin/adminpages/staff/doctor/docServices";
import DocReview from "./components/admin/adminpages/staff/doctor/docReview";
import DocSuccessAdd from "./components/admin/adminpages/staff/doctor/docSucessAdd";

// Pharmacist Pages
import AddPharm from "./components/admin/adminpages/staff/pharmarcist/index";
import PharmBasicInfo from "./components/admin/adminpages/staff/pharmarcist/pharmBasicInfo";
import PharmEnterDetails from "./components/admin/adminpages/staff/pharmarcist/pharmEnterDetails";
import PharmServices from "./components/admin/adminpages/staff/pharmarcist/pharmServices";
import PharmReview from "./components/admin/adminpages/staff/pharmarcist/pharmReview";
import PharmSuccessAdd from "./components/admin/adminpages/staff/pharmarcist/pharmSuccessAdd";

// Nurse Pages
import AddNurse from "./components/admin/adminpages/staff/nurses/index";
import NurseBasicInfo from "./components/admin/adminpages/staff/nurses/nurseBasicInfo";
import NursesEnterDetails from "./components/admin/adminpages/staff/nurses/nurseEnterDetails";
import NursesServices from "./components/admin/adminpages/staff/nurses/nurseServices";
import NursesReview from "./components/admin/adminpages/staff/nurses/nurseReview";
import NursesSuccessAdd from "./components/admin/adminpages/staff/nurses/nurseSuccessAdd";

// Lab Scientist Pages
import AddLab from "./components/admin/adminpages/staff/labScientist/index";
import LabBasicInfo from "./components/admin/adminpages/staff/labScientist/labBasicInfo";
import LabEnterDetails from "./components/admin/adminpages/staff/labScientist/labEnterDetails";
import LabServices from "./components/admin/adminpages/staff/labScientist/labServices";
import LabReview from "./components/admin/adminpages/staff/labScientist/labReview";
import LabAddSuccess from "./components/admin/adminpages/staff/labScientist/labAddSuccess"

// Domestic Workers Page
import AddDomesticWorkers from "./components/admin/adminpages/staff/domesticWorkers/index";
import BasicInfoDomW from "./components/admin/adminpages/staff/domesticWorkers/domWorkBasicInfo";
import DomEnterDetails from "./components/admin/adminpages/staff/domesticWorkers/domEnterDetails";
import DomServices from "./components/admin/adminpages/staff/domesticWorkers/domServices";
import DomReview from "./components/admin/adminpages/staff/domesticWorkers/domReview";
import DomAddSuccess from "./components/admin/adminpages/staff/domesticWorkers/domAddSuccess";

// Admin Patient Sides
import Patient from "./components/admin/adminpages/patients";
import PatientList from "./components/admin/adminpages/patients/PatientList";
import PatDetails from "./components/admin/adminpages/patients/PatientDetails";

// Admin Payroll
import Payroll from "./components/admin/adminpages/payroll/Payroll"; 

// Bio Pages
import PrevApp from "./components/admin/adminpages/patients/PrevAppoint";
import DocDetails from "./components/admin/adminpages/staff/doctor/DocDetails";
import PharmDetails from "./components/admin/adminpages/staff/pharmarcist/PharmDetails";
import NurseDetails from "./components/admin/adminpages/staff/nurses/NurseDetails";
import PersDocDetails from "./components/admin/adminpages/staff/doctor/PersDocDetails";
import DocAPPoint from "./components/admin/adminpages/staff/doctor/DocAPPoint";
import PharmDets from "./components/admin/adminpages/staff/pharmarcist/PharmMoreDets";
import NurseBio from "./components/admin/adminpages/staff/nurses/PersNurseBio";
import LabSciBio from "./components/admin/adminpages/staff/labScientist/LabSciBio";
import LabBIo from "./components/admin/adminpages/staff/labScientist/LabBio";
import DomBio from "./components/admin/adminpages/staff/domesticWorkers/DomBio";
import DomWORk from "./components/admin/adminpages/staff/domesticWorkers/DomWorkBios";

// Doctor Pages
import NavLayout from "./layouts/NavLayout";
import DocDashboard from "./components/dochome/DocDashboard";
import DocAppointment from "./components/dochome/DocAppointment";
import DocNotifications from "./components/dochome/DocNotifications";
import AppointmentDetails from "./components/dochome/AppointmentDetails";
import DocProfile from "./components/dochome/DocProfile";
import DocAlert from "./components/dochome/DocAlert";

function App() {
  // ADMIN
  const [hospitalId, setHospitalId] = useState('');
  const [adminId, setAdminId] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  // PHARMACIST
  const [pharmId, setPharmId] = useState('');
  const [pharmPword, setPharmPword] = useState('');

  // LAB
  const [labId, setLabId] = useState('');
  const [labPassword, setLabPassword] = useState('');

  // DOCTOR
  const [docId, setDocId] = useState("");
  const [docPword, setDocPword] = useState("");

  // Responses
  const [data, setData] = useState('');
  const [adminData, setAdminData] = useState('');

  // User Details
  const [pers, setPers] = useState('');
  const [pharM, setPharM] = useState('');
  const [nuRse, setNuRse] = useState('');
  const [labScientist, setLabScientist] = useState('');
  const [domWk, setDomWk] = useState('');
  const [patientDetails, setPatientDetails] = useState('');

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" element={<SignIn hospitalId={hospitalId} adminData={adminData} setAdminData={setAdminData} adminId={adminId} adminPassword={adminPassword} pharmId={pharmId} pharmPword={pharmPword} labId={labId} labPassword={labPassword} docId={docId} docPword={docPword} data={data} setData={setData} />} >
            <Route index element={<Adminform hospitalId={hospitalId} adminData={adminData} setAdminData={setAdminData} setHospitalId={setHospitalId} adminId={adminId} setAdminId={setAdminId} adminPassword={adminPassword} setAdminPassword={setAdminPassword} />} />
            <Route path="pharm" element={<PharmForm pharmId={pharmId} data={data} setData={setData} setPharmId={setPharmId} pharmPword={pharmPword} setPharmPword={setPharmPword}  />} />
            <Route path="Lab" element={<Labform labId={labId} data={data} setData={setData} setLabId={setLabId} labPassword={labPassword} setLabPassword={setLabPassword} />} />
            <Route path="doctor" element={<DoctorForm docId={docId} data={data} setData={setData} setDocId={setDocId} docPword={docPword}  setDocPword={setDocPword} />} />
          </Route>
          {/* Admin */}
          <Route path="adminhome" element={<Header/>} >
            <Route path="AdminProfile" element={<AdminProfile/>} />
            {/* Doctor */}
            <Route index element={<AddDoctor pers={pers} setPers={setPers} />} />
            <Route path="docdetails" element={<DocDetails pers={pers}/>}>
              <Route index element={<PersDocDetails pers={pers}/>} />
              <Route path="DocAPPointment" element={<DocAPPoint pers={pers}/>} />
            </Route>
            <Route path="AddDoctor" element={<Regdoc/>} >
              <Route index element={<DocBasicInfo />}/>
              <Route path="docEnterDetails" element={<DocEnterDetails  />} />
              <Route path="docServices" element={<DocServices />} />
              <Route path="docReview" element={<DocReview />} />
              <Route path="docSuccessAdd" element={<DocSuccessAdd />} />
            </Route>

            {/* Pharmacist */}
            <Route path="pharmacist" element={<AddPharm pharM={pharM} setPharM={setPharM} />} />
            <Route path="pharmdetails" element={<PharmDetails pharM={pharM} />}>
              <Route index element={<PharmDets pharM={pharM} />} />
            </Route>
            <Route path="Addpharmacist" element={<RegPharmacist/>} >
              <Route index element={<PharmBasicInfo />} />
              <Route path="pharmEnterDetails" element={<PharmEnterDetails />} />
              <Route path="pharmServices" element={<PharmServices />} />
              <Route path="pharmReview" element={<PharmReview />} />
              <Route path="pharmSuccessAdd" element={<PharmSuccessAdd/>} />
            </Route>

            {/* Nurses */}
            <Route path="nurse" element={<AddNurse nuRse={nuRse} setNuRse={setNuRse} />} />
            <Route path="nursedetails" element={<NurseDetails nuRse={nuRse} />}>
              <Route index element={<NurseBio nuRse={nuRse} />} />
            </Route>
            <Route path="AddNurse" element={<RegNurse />} >
              <Route index element={<NurseBasicInfo />} />
              <Route path="nurseEnterDetails" element={<NursesEnterDetails />} />
              <Route path="nurseServices" element={<NursesServices />} />
              <Route path="nurseReview" element={<NursesReview />} />
              <Route path="nurseSuccessAdd" element={<NursesSuccessAdd/>} />
            </Route>

            {/* Lab Scientist */}
            <Route path="labScientist" element={<AddLab labScientist={labScientist} setLabScientist={setLabScientist} />} />
            <Route path="labDEtails" element={<LabSciBio labScientist={labScientist}/>} >
              <Route index element={<LabBIo labScientist={labScientist}/>} />
            </Route>
            <Route path="AddLabSci" element={<RegLab/>}>
              <Route index element={<LabBasicInfo />} />
              <Route path="labEnterDetails" element={<LabEnterDetails />} />
              <Route path="labServices" element={<LabServices />} />
              <Route path="labReview" element={<LabReview />} />
              <Route path="labAddSuccess" element={<LabAddSuccess/>} />
            </Route>

            {/* Domestic Workers */}
            <Route path="domesticWorkers" element={<AddDomesticWorkers domWk={domWk} setDomWk={setDomWk} />} />
            <Route path="domworkerdetails" element={<DomBio domWk={domWk}/>} >
              <Route index element={<DomWORk domWk={domWk}/>} />
            </Route>
            <Route path="AddDomWorker" element={<RegDom/>}>
              <Route index element={<BasicInfoDomW />} />
              <Route path="domEnterDetails" element={<DomEnterDetails />} />
              <Route path="domServices" element={<DomServices />} />
              <Route path="domReview" element={<DomReview />} />
              <Route path="domAddSuccess" element={<DomAddSuccess/>} />
            </Route>

            {/* Admin Patient Side */}
            <Route path="patients" element={<Patient patientDetails={patientDetails} setPatientDetails={setPatientDetails} />} >
              <Route index element={<PatientList patientDetails={patientDetails} setPatientDetails={setPatientDetails} />} />
              <Route path="patientdetails" element={<PatDetails patientDetails={patientDetails} setPatientDetails={setPatientDetails} />}>
                <Route index element={<PrevApp/>} />
              </Route>
            </Route>
            
            {/* Admin Payroll */}
            <Route path="payroll" element={<Payroll/>} />
          </Route>
          <Route path="dochome" element={<NavLayout/>} >
            <Route index element={<DocDashboard/>}/>
            <Route path="appointment" element={<DocAppointment/>} />
            <Route path="details" element={<AppointmentDetails/>} />
            <Route path="notifications" element={<DocNotifications/>} />
            <Route path="alert" element={<DocAlert/>} />
            <Route path="docProfile" element={<DocProfile/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
