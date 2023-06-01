import styles from "./Demo.module.scss"
import {useSelector} from "react-redux";
export const ResumeInfo = ({data})=>{
    const mockData = useSelector((state) => state.user);
    return(
        <div className={styles.container}>
            <div className={styles.profile}>
                <div>
                    <div>
                        {data?
                            data?.generalInfo?.imageUrl &&
                            <img
                                src={data?.generalInfo?.imageUrl}
                                alt="img"
                                className={styles.img}
                            />:
                            <img className={styles.img} src="https://st4.depositphotos.com/4678277/28917/i/600/depositphotos_289173464-stock-photo-close-up-photo-amazing-he.jpg" alt="img"/>
                        }
                    </div>
                </div>
                <div className={styles.profile_info}>
                    <h1>
                            <span className={styles.profile_name_firstName}>
                                {data?data.generalInfo.firstName:mockData.generalInfo.firstName}
                            </span>
                            <span className={styles.profile_name_secondName}>
                                {data?data.generalInfo.secondName:mockData.generalInfo.secondName}
                            </span>
                    </h1>
                    <p className={styles.profile_title}>{data?data.generalInfo.profileTitle:mockData.generalInfo.profileTitle}</p>
                    <p className={styles.description}>{data?data.generalInfo.description:mockData.generalInfo.description}</p>
                </div>
            </div>
            <div className={styles.group1}>
                <div className="skills">
                    <h3 className={styles.title}>Skills</h3>
                    <ul className={styles.skills_list}>
                        {data
                            ? data.skills.map((skill, index) => <li key={index}>{skill}</li>)
                            : mockData.skills.map((skill, index) => <li key={index}>{skill}</li>)}
                    </ul>
                </div>
                <div className="languages">
                    <h3 className={styles.title}>Languages</h3>
                    <ul className={styles.languages_list}>
                        {data
                            ? data.languages.map((languages, index) => <li key={index}>{languages}</li>)
                            : mockData.languages.map((languages, index) => <li key={index}>{languages}</li>)}
                    </ul>
                </div>
                <div className="education">
                    <h3 className={styles.title}>Education</h3>
                    <div className="education_list">
                        {data?
                            data.education.map((item, index) => (
                            <div key={index}>
                                <p className={styles.education_list_year}>{item.educationYear}</p>
                                <p className={styles.education_list_text}>{item.educationText}</p>
                            </div>
                        )):
                            mockData.education.map((item, index) => (
                                <div key={index}>
                                    <p className={styles.education_list_year}>{item.educationYear}</p>
                                    <p className={styles.education_list_text}>{item.educationText}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="certification">
                    <h3 className={styles.title}>Courses</h3>
                    <div className="courses_list">
                        {data?
                            data.courses.map((item, index) => (
                                <div key={index}>
                                    <p className={styles.courses_list_year}>{item.coursesYear}</p>
                                    <p className={styles.courses_list_text}>{item.coursesList}</p>
                                </div>
                            )):
                            mockData.courses.map((item, index) => (
                                <div key={index}>
                                    <p className={styles.courses_list_year}>{item.coursesYear}</p>
                                    <p className={styles.courses_list_text}>{item.coursesList}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={styles.group2}>
                <div className="personalData">
                    <h3 className={styles.title}>Personal data</h3>
                    <div className="personalData_list">
                        <p className={styles.personalData_address}>{data?data.personalData.address:mockData.personalData.address}</p>
                        <p className={styles.personalData_phone}>{data?data.personalData.phoneNumber:mockData.personalData.phoneNumber}</p>
                        <p className={styles.personalData_dateOfBrh}>{data?data.personalData.dateOfBrh:mockData.personalData.dateOfBrh}</p>
                        <p className={styles.personalData_email}>{data?data.personalData.email:mockData.personalData.email}</p>
                    </div>
                </div>
                <div className="interests">
                    <h3 className={styles.title}>Interests</h3>
                    <ul className={styles.interests_list}>
                        {data
                            ? data.interests.map((interests, index) => <li key={index}>{interests}</li>)
                            : mockData.interests.map((interests, index) => <li key={index}>{interests}</li>)
                        }
                    </ul>
                </div>
                <div className="social_networks">
                    <h3 className={styles.title}>Social Networks</h3>
                    <ul className={styles.socialNetworks_list}>
                        {data
                            ? data.socialNetworks.map((socialNetworks, index) => <li key={index}>{socialNetworks}</li>)
                            : mockData.socialNetworks.map((socialNetworks, index) => <li key={index}>{socialNetworks}</li>)
                        }
                    </ul>
                </div>
                <div className="expirience">
                    <h3 className={styles.title}>Experience</h3>
                    <div className="experience_list">
                        {data
                            ?data.experience.map((item, index) => (
                                <div key={index}>
                                    <p className={styles.experience_list_year}>{item.experienceYear}</p>
                                    <p className={styles.experience_list_text}>{item.experienceText}</p>
                                </div>
                            )):
                            mockData.experience.map((item, index) => (
                                <div key={index}>
                                    <p className={styles.experience_list_year}>{item.experienceYear}</p>
                                    <p className={styles.experience_list_text}>{item.experienceText}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}