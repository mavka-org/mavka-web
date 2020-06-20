import React from 'react';
import s from './Footer.module.css';
import firebase from '../../global'
import Services from '../../Services'
import _ from 'lodash';

class Footer extends React.Component {

    async get_all_names () {
        let data = await Services.getTeamInfo()
        let names = []

        for (let x of data) {
            names.push(x['Name']);
        }

        let n = 6
        let lists = []
        let tempGroup = []

        for (let i = 0; i < names.length; i++) {
            if (i % n == 0){
                lists.push(tempGroup)
                tempGroup = []
            }
            tempGroup.push(names[i])
        }
        lists.push(tempGroup)

        return lists
    }


    async write_all_names() {

        // Get data
        let data = await Services.getTeamInfo()
        let names = []

        for (let x of data) {
            names.push(x['Name']);
        }

        // Split data into groups of 6
        let n = 6
        let lists = []
        let tempGroup = []

        for (let i = 0; i < names.length; i++) {
            if (i % n == 0){
                lists.push(tempGroup)
                tempGroup = []
            }
            tempGroup.push(names[i])
        }
        lists.push(tempGroup)
        lists.shift() // delte empty first slot

        console.log("HERE")
        lists = Array.of(lists)
        console.log(lists)
        console.log(typeof lists)

        // CAN'T RETURN ALL OF THEM:

        return lists.products.map(function(group){
            return(
                <div className={s.names}>
                    <div classNam={s.names_object}>
                        <div className={s.name}>{group[3]}</div>
                        <div className={s.name}>{group[0]}</div>
                    </div>
                    <div classNam={s.names_object}>
                        <div className={s.name}>{group[4]}</div>
                        <div className={s.name}>{group[1]}</div>
                    </div>
                    <div classNam={s.names_object}>
                        <div className={s.name}>{group[5]}</div>
                        <div className={s.name}>{group[2]}</div>
                    </div>
                </div>
            )
          })


        }


    render() {
        return (
            <div className={s.footer}>
                <div className={s.info}>
                    <div className={s.info_mavka}>
                        <div><strong>мавка</strong></div>
                        <div>описание</div>
                    </div>
                    <div className={s.info}>
                        <div className={s.info_mavka}>
                            <div><strong>Зв'язок</strong></div>
                            <div>мавка @Телеграм</div>
                            <div>hello@mavka.org</div>
                        </div>
                    </div>
                </div>
                <div className={s.names_frame}>
                    <div className={s.title}><strong>Люди за мавкою</strong></div>

                        {this.write_all_names()}

                </div>
            </div>
        )
    }
}

export default Footer;
