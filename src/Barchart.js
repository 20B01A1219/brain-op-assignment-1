import React from 'react';
import {Chart as chartjs, BarElement, CategoryScale, LinearScale} from 'chart.js'
import {Bar} from 'react-chartjs-2';
import './bargraph.css';
import patients from './patientsdetails.json';
chartjs.register(
    CategoryScale,
    LinearScale,
    BarElement
)
const Barchart = (props) => {
    
var array = [];
array.push(patients[props.pid-1].Warmth)
array.push(patients[props.pid-1].Reasoning)
array.push(patients[props.pid-1].EmotionalStability)
array.push(patients[props.pid-1].Dominance)
array.push(patients[props.pid-1].Liveliness)
array.push(patients[props.pid-1].RuleConciousness)
array.push(patients[props.pid-1].SocialBoldness)
array.push(patients[props.pid-1].Sensitivity)
array.push(patients[props.pid-1].Vigilance)
array.push(patients[props.pid-1].Abstractedness)
array.push(patients[props.pid-1].Privateness)
array.push(patients[props.pid-1].Apprehension)
array.push(patients[props.pid-1].Opennesstochange)
array.push(patients[props.pid-1].SelfReliance)
array.push(patients[props.pid-1].Perfectionism)
array.push(patients[props.pid-1].Tension)
   console.log(array)
    var data =  {
        labels: ['warmth', 'Reasoning', 'Emotional Stability', 'Dominance', 'Liveliness', 'Rule Conciousness','Social Boldness','Sensitivity','Vigilance','Abstractedness','Privateness','Apprehension','Openness to change','Self Reliance','Perfectionism','Tension'],
        datasets: [{
            label: '# of Votes',
            data: array,
            backgroundColor: [
                '#7FFF00',
                '#6495ED',
                '#00FFFF',
                '#E9967A',
                '#FF1493',
                '#D3D3D3',
                
            ],
            borderColor: [
                'green',
                'purple',
                '#48D1CC',
                'brown',
                'pink',
                'black',
                
            ],
            borderWidth: 2
        }]
    }
    var options =  {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    return (
        <center>
            
        <div className='bar'>
        <h2>Welcome {patients[props.pid-1].Name}</h2>
            <Bar 
            data = {data}
            height={100}
            width = {350}  
            options = {options}
            />
        </div>
        {/* <table border = {1}>
            <thead>
                <tr>
                    <th>
                    name
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    patients.map((x, index)=>(
                        <tr key = {index}>
                            <td>
                                {x.Name}
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table> */}
        </center>
    );
};

export default Barchart;