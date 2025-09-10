import "../class_regulation.css"
import course_img_reg from "../assets/course_reg.jpg"
export function Class_Regulation() {
    return (
        <div className="row">
            <section>
                <h2>修課規定</h2>
                <p>
                    課程分為運動專業學分領域、AI 基礎學分領域、以及專題研究三部分。
                    修課學生從運動專業學分領域選擇一到三門課，從 AI 基礎學分領域選擇一到三門課，
                    最後必修「AI 運動科技專題研究（一）（二）」，總共修畢至少 12 學分，
                    可在畢業證書上加註具備運動科技專長。
                </p>
                <img className="class_reg_img" src={course_img_reg} alt="course regulation" />
            </section>
        </div>
    )
}
