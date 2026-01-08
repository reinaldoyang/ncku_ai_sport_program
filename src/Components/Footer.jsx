import "../footer.css"
function Footer() {
    return (
        <footer className="site-footer" role="contentinfo">
        <div className="footer-main">
            <p>
                聯絡方式 Contact<br/>
                地址:台南市東區大學路1號<br/>
                No. 1, Daxue Rd., East Dist., Tainan City 701, Taiwan (R.O.C.)<br/>
                電話:06-2757575 ext 81818<br/>
                傳真:06-2766427<br/>
                E-mail:em50380@email.ncku.edu.tw
            </p>
        </div>
        <div className="footer-bottom">
            <p>Designed by <a href="#">Reinaldo Yang</a>. All rights reserved.</p>
            <p>Copyright © 2017 國立成功大學體育室</p>
        </div>
    </footer>
    );
}

export default Footer;
