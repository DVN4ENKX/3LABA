import React from 'react';
import block from "../assets/block.svg"
import block_click from "../assets/block_click.svg"
import top from "../assets/top.svg"
import './tabel.css';
export default function table() {
    return (
        <div class="table">
            <table border="0" width="100%" cellpadding="1" >
                <tr>
                    
                    <th class='blo'><input type="checkbox"/></th>
                    <th class='statuces'>Статус заявки</th>
                    <th class='vac'>Вакансия</th>
                    <th class='dol'>Должность</th>
                    <th class='rol'>Роль</th>
                    <th class='fio'>ФИО</th>
                    <th class='stas'>Статус</th>
                    <th class='stav'>Ставка, FTE</th>
                    <th class='fun'>Функция</th>
                    <th class='cat'>Категория</th>
                 
                </tr>
                <tr>
                
                    <td class='blo'><input type="checkbox"/></td>
                    <td class='status'>направлена</td>
                    <td>Вакансия 2021 Q2</td>
                    <td>Ведущий разработчик</td>
                    <td>Ведущий разработчик</td>
                    <td>Князев Никола Сергеевич</td>
                    <td class='sta'>потребность</td>
                    <td>1,0</td>
                    <td>Бренд Эльдорадо</td>
                    <td>Проекты и BAU Маркетинга Эльдорадо</td>
                   
                </tr>
                <tr>
                
                    <td class='blo'><input type="checkbox" checked/></td>
                    <td class='status'>в работе</td>
                    <td>Вакансия 2021 Q2<img src={(top)}/></td>
                    <td>Ведущий разработчик</td>
                    <td>Ведущий разработчик</td>
                    <td></td>
                    <td class='sta'>потребность</td>
                    <td>1,0</td>
                    <td>Коммерция</td>
                    <td>Проекты и BAU Маркетинга Эльдорадо</td>
                    
                </tr>
                <tr>
               
                    <td class='blo'><input type="checkbox"/></td>
                    <td class='status'>в работе</td>
                    <td>Вакансия 2021 Q2</td>
                    <td>Разработчик</td>
                    <td>Разработчик</td>
                    <td>Рогатко Алексей Владимирович</td>
                    <td class='sta'>потребность</td>
                    <td>1,0</td>
                    <td>Бренд Эльдорадо</td>
                    <td>Проекты и BAU Маркетинга Эльдорадо</td>
                    
                </tr>
                <tr>
                
                    <td class='blo'><input type="checkbox"/></td>
                    <td class='status'>закрыта</td>
                    <td>Вакансия 2021 Q2<img src={(top)}/></td>
                    <td>Разработчик</td>
                    <td>Разработчик</td>
                    <td>Петров Владимир Николаевич</td>
                    <td class='sta'>потребность</td>
                    <td>1,0</td>
                    <td>Коммерция</td>
                    <td>Direct Experience E</td>
                   
                </tr>
            </table>
        </div>
    )
}
