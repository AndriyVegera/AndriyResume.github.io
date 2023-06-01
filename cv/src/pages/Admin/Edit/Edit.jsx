import styles from "./Edit.module.scss"
import {ListInput} from "../../../components/EditInputs/ListInput";
import {useEffect, useState} from "react";
import {Loader, Uploader} from "rsuite";
import AvatarIcon from '@rsuite/icons/legacy/Avatar';
function previewFile(file, callback) {
    const reader = new FileReader();
    reader.onloadend = () => {
        callback(reader.result);
    };
    reader.readAsDataURL(file);
}
const Edit = ({data, handleGIEEdit, addInfo,setFileInfo, uploading, fileInfo,handleFileUpload})=> {
    const [initialized, setInitialized] = useState(false);
    // const data = useSelector((state) => state.user);
    const [skillsFormValue,setSkillsFormValue]=useState(data.skills);
    const [languagesFormValue,setLanguagesFormValue]=useState(data.languages);
    const [interestsFormValue,setInterestsFormValue]=useState(data.interests);
    const [socialFormValue,setSocialFormValue]=useState(data.socialNetworks);
    const [generalInfo, setGeneralInfo] = useState(data.generalInfo);
    const [education, setEducation] = useState(data.education)
    const [courses,setCourses]= useState(data.courses);
    const [personalData, setPersonalData]=useState(data.personalData)
    const [experience,setExperience] = useState(data.experience)
    useEffect(() => {
        if (!initialized) {
            addInfo();
            setInitialized(true);
        }
    }, [initialized]);
    useEffect(()=>{
        setSkillsFormValue(data.skills)
        setLanguagesFormValue(data.languages)
        setInterestsFormValue(data.interests)
        setSocialFormValue(data.socialNetworks)
    }, [data])

    // skills:[
    //   'A', 'B', 'C', ''
    // ]
// div skills
//     {formValue.skills.map(skill, idx =>
//     <input>
//         value={skill}
//         <button onClick={()=> {
//             const skills = [...formValue.skills]
//             skills.splice(idx, 1)
//             setSkillsFormValue(skills)
//         }}>Delete</button>
//     </input>
//     )}
//     button Add
//     ()=> {
//     const skills = [...formValue.skills]
//       skills.push('')
//         setSkillsFormValue(skills)
//     }
//
//     ()=> sendData(
//       {
//           skills: skillsFormValue,
//           generalInfo: giFV
//       }
//     )
    const handleInputChange = (key,value)=>{
        setGeneralInfo((prevState)=>{
                return{
                    ...prevState,
                    [key]:value
                }
            }
        )
        setPersonalData((prevState)=>{
                return{
                    ...prevState,
                    [key]:value
                }
            }
        )
    }
    return(
        <div className={styles.general}>
            <div className={styles.container}>
                <div className={styles.profile}>
                    <div>
                        <div>
                            <Uploader
                                fileListVisible={false}
                                listType="picture"
                                action=""
                                multiple={false}
                                autoUpload={false}
                                onChange={async (fileList)=>{
                                    previewFile(fileList[fileList.length-1].blobFile, value => {
                                        setFileInfo(value);
                                    });
                                    handleFileUpload(fileList[fileList.length-1].blobFile)
                                }}
                            >
                                <button style={{ width: 250, height: 300 }}>
                                    {uploading && <Loader backdrop center />}
                                    {generalInfo?.imageUrl && !fileInfo ? (
                                        <img src={generalInfo?.imageUrl  } width="100%" height="100%" alt="img" />
                                    ) : fileInfo ? (
                                        <img src={fileInfo} width="100%" height="100%" alt="img"/>
                                    ) : (
                                        <AvatarIcon style={{ fontSize: 80 }} />
                                    )}
                                </button>
                            </Uploader>
                        </div>
                    </div>
                    <div className={styles.profile_info}>
                        <h1>
                             <span className={styles.profile_name_firstName}>
                                {data.generalInfo.firstName}
                            </span>
                            <div>
                                <input value={generalInfo.firstName} className={styles.input} type="text" placeholder="Surname" onChange={(e)=>handleInputChange('firstName', e.target.value)}/>
                            </div>
                            <span className={styles.profile_name_secondName}>
                                {data.generalInfo.secondName}
                            </span>
                            <div>
                                <input value={generalInfo.secondName} className={styles.input} type="text" placeholder="Name" onChange={(e)=>handleInputChange('secondName', e.target.value)}/>
                            </div>
                        </h1>
                        <p className={styles.profile_title}>{data.generalInfo.profileTitle}</p>
                        <div>
                            <input value={generalInfo.profileTitle} className={styles.input} type="text" placeholder="Profile Title" onChange={(e)=>handleInputChange('profileTitle', e.target.value)}/>
                        </div>
                        <p className={styles.description}>{data.generalInfo.description}</p>
                        <div>
                            <input value={generalInfo.description} className={styles.inputDesc} type="text" placeholder="Description" onChange={(e)=>handleInputChange('description', e.target.value)}/>
                        </div>
                    </div>
                    <button className={styles.buttonSaveInf} type="button" onClick={()=>handleGIEEdit(generalInfo,skillsFormValue,languagesFormValue,education,courses,personalData,interestsFormValue,socialFormValue,experience)}>Save Info</button>
                </div>
                <div className={styles.group1}>
                    <div className="skills">
                        <h3 className={styles.title}>Skills</h3>
                        <ul className={styles.skills_list}>
                            {skillsFormValue.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                        <ListInput formValue={skillsFormValue} setFormValue={setSkillsFormValue} placeholder="New Skill"/>
                    </div>
                    <div className="languages">
                        <h3 className={styles.title}>Languages</h3>
                        <ul className={styles.languages_list}>
                            {languagesFormValue.map((languages, index) => (
                                <li key={index}>{languages}</li>
                            ))}
                        </ul>
                        <ListInput formValue={languagesFormValue} setFormValue={setLanguagesFormValue} placeholder="New Languages"/>
                    </div>
                    <div className="education">
                        <h3 className={styles.title}>Education</h3>
                        <div className="education_list">
                            {education.map((item, index) => (
                                <div key={index}>
                                    <p className={styles.education_list_year}>{item.educationYear}</p>
                                    <input
                                        value={item.educationYear}
                                        className={styles.input}
                                        type="text"
                                        placeholder="Education Year"
                                        onChange={(e) => {
                                            const updatedEducation = [...education];
                                            updatedEducation[index].educationYear = e.target.value;
                                            setEducation(updatedEducation);
                                        }}
                                    />
                                    <p className={styles.education_list_text}>{item.educationText}</p>
                                    <input
                                        value={item.educationText}
                                        className={styles.input}
                                        type="text"
                                        placeholder="Education Text"
                                        onChange={(e) => {
                                            const updatedEducation = [...education];
                                            updatedEducation[index].educationText = e.target.value;
                                            setEducation(updatedEducation);
                                        }}
                                    />
                                </div>
                            ))}

                        </div>
                    </div>
                    <div className="certification">
                        <h3 className={styles.title}>Courses</h3>
                        <div className="courses_list">
                            {courses.map((item, index) => (
                                <div key={index}>
                                    <p className={styles.courses_list_year}>{item.coursesYear}</p>
                                    <input
                                        value={item.coursesYear}
                                        className={styles.input}
                                        type="text"
                                        placeholder="Courses Year"
                                        onChange={(e) => {
                                            const updatedCourses = [...courses];
                                            updatedCourses[index].coursesYear = e.target.value;
                                            setCourses(updatedCourses);
                                        }}
                                    />
                                    <p className={styles.courses_list_text}>{item.coursesList}</p>
                                    <input
                                        value={item.coursesList}
                                        className={styles.input}
                                        type="text"
                                        placeholder="Courses Text"
                                        onChange={(e) => {
                                            const updatedCourses = [...courses];
                                            updatedCourses[index].coursesList = e.target.value;
                                            setCourses(updatedCourses);
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.group2}>
                    <div className="personalData">
                        <h3 className={styles.title}>Personal data</h3>
                        <div className="personalData_list">
                            <p className={styles.personalData_address}>{data.personalData.address}</p>
                            <input value={personalData.address} className={styles.input} type="text" placeholder="Address" onChange={(e)=>handleInputChange('address', e.target.value)}/>
                            <p className={styles.personalData_phone}>{data.personalData.phoneNumber}</p>
                            <input value={personalData.phoneNumber} className={styles.input} type="text" placeholder="Phone number" onChange={(e)=>handleInputChange('phoneNumber', e.target.value)}/>
                            <p className={styles.personalData_dateOfBrh}>{data.personalData.dateOfBrh}</p>
                            <input value={personalData.dateOfBrh} className={styles.input} type="text" placeholder="Date of Birhday" onChange={(e)=>handleInputChange('dateOfBrh', e.target.value)}/>
                            <p className={styles.personalData_email}>{data.personalData.email}</p>
                            <input value={personalData.email} className={styles.input} type="text" placeholder="Email Address" onChange={(e)=>handleInputChange('email', e.target.value)}/>
                        </div>
                    </div>
                    <div className="interests">
                        <h3 className={styles.title}>Interests</h3>
                        <ul className={styles.interests_list}>
                            {interestsFormValue.map((interests, index) => (
                                <li key={index}>{interests}</li>
                            ))}
                        </ul>
                        <ListInput formValue={interestsFormValue} setFormValue={setInterestsFormValue} placeholder="New interest"/>
                    </div>
                    <div className="social_networks">
                        <h3 className={styles.title}>Social Networks</h3>
                        <ul className={styles.socialNetworks_list}>
                            {socialFormValue.map((social, index) => (
                                <li key={index}>{social}</li>
                            ))}
                        </ul>
                        <ListInput setFormValue={setSocialFormValue} formValue={socialFormValue} placeholder="New social"/>
                    </div>
                    <div className="expirience">
                        <h3 className={styles.title}>Experience</h3>
                        <div className="experience_list">
                            {experience.map((item, index) => (
                                <div key={index}>
                                    <p className={styles.courses_list_year}>{item.experienceYear}</p>
                                    <input
                                        value={item.experienceYear}
                                        className={styles.input}
                                        type="text"
                                        placeholder="Experience Year"
                                        onChange={(e) => {
                                            const updatedExperience = [...experience];
                                            updatedExperience[index].experienceYear = e.target.value;
                                            setExperience(updatedExperience);
                                        }}
                                    />
                                    <p className={styles.courses_list_text}>{item.experienceText}</p>
                                    <input
                                        value={item.experienceText}
                                        className={styles.input}
                                        type="text"
                                        placeholder="Experience"
                                        onChange={(e) => {
                                            const updatedExperience = [...experience];
                                            updatedExperience[index].experienceText = e.target.value;
                                            setExperience(updatedExperience);
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Edit;
