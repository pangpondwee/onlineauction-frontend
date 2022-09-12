import React from "react";

const FAQ = () => {
    return (
        <div>
            <h3 className="faq-title">Frequently asked questions</h3>
            <div className="Q1">
                <div className="Q1-1">
                    <h4 className="question">Q: What is Closed/Open bid?</h4>
                </div>
                <div className="Q1-2">
                    <h4>A:</h4>
                    <div>
                        Closed Bid : User ที่ไม่ใช่ Bidder ในการร่วมประมูลครั้งนี้จะเห็นแค่ Current Price Bid และราคาของสินค้าเริ่มต้น
                        <ul>
                            <li>ชื่อ และ Rating ของ Auctioneer</li>
                            <li>Description ของสินค้า</li>
                        </ul>
                        Open Bid : ทั้ง User และ Bidder เห็นรายละเอียดเหมือนกัน
                        <ul>
                            <li>เห็นสิ่งที่เป็น Closed Bid</li>
                            <li>เห็นว่ามีใคร Bid บ้าง</li>
                            <li>เห็น Transaction การ Bid ย้อนหลัง 10 Transaction</li>
                            <li>เห็นว่า Bidder แต่ละคนลงกี่ครั้ง ลงสูงสุดเท่าไหร่</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="Q2">
                <div className="Q2-1">
                    <h4 className="question">Q: What is expected price?</h4>
                </div>
                <div className="Q2-2">
                    <h4>A:</h4>
                    <div>
                        ถ้าราคาสูงสุดปัจจุบันสูงกว่าหรือเท่ากับ Expected Price ของ Auctioneer ระบบจะส่งแจ้งเตือนไปยังคนที่ Follow และ Favorite ไว้ จากนั้นจะลดระยะเวลาในการประมูลเหลือเพียง 1 ชั่วโมงและนับถอยหลังเข้าสู่ระบบ Five Minute System
                    </div>
                </div>
            </div>
            <div className="Q3">
                <div className="Q3-1">
                    <h4 className="question">Q: What is minimum bid step?</h4>
                </div>
                <div className="Q3-2">
                    <table className="bid-step-table">
                        <thead>
                            <tr>
                                <th scope="col">ช่วงราคาสินค้า</th>
                                <th scope="col">Minimum bid price</th>
                            </tr>
                        </thead>
                        <tbody className=" table-body table-group-divsider">
                            <tr>
                                <th scope="row">น้อยกว่าหรือเท่ากับ 5000 บาท</th>
                                <td>Bid เพิ่มขั้นต่ำ 50 บาท</td>
                            </tr>
                            <tr>
                                <th scope="row">มากกว่า 5000 บาท</th>
                                <td>ราคาเริ่มต้น / 100 แล้วปัดขึ้นทุกกรณีให้เหลือเลขเพียงหลักเดียว</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default FAQ;