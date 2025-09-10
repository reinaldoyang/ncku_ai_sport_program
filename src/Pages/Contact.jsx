import "../contact.css"
export function Contact() {
    return (
        <div class = "content">
        <table class="contact-table">
            <thead>
                <tr>
                <th>姓名</th>
                <th>單位</th>
                <th>職稱</th>
                <th>電話</th>
                <th>信箱</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>鄭嘉綺</td>
                <td>體育室</td>
                <td>專案工作人員</td>
                <td>81818</td>
                <td><a href="mailto:z11208119@ncku.edu.tw">z11208119@ncku.edu.tw</a></td>
                </tr>
                <tr>
                <td>黃如薇</td>
                <td>資工程學系</td>
                <td>專案工作人員</td>
                <td>62530#2601</td>
                <td><a href="mailto:z11407316@ncku.edu.tw">z11407316@ncku.edu.tw</a></td>
                </tr>
            </tbody>
        </table>

    </div>
    )
}