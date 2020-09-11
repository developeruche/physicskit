import React, { Component } from 'react';
import './phycon.css'
class Constant extends Component {
    state = {
        conName: ['Speed of light', 'Charge of an electron', 'Universal gravitational constant',
            'Planck’s constant', 'Dirac’s constant', 'Boltzmann’s constant',
            'Avogadro’s constant', 'Faraday’s constant', 'Ideal gas constant',
            'Mass of an electron', 'Mass of a proton', 'Mass of a neutron',
            'Atomic mass unit', 'Permittivity of free space',
            'Coulomb’s constant', 'Permeability of free space', 'Rydberg constant', 'Bohr radius'],
        conSmybol: ['c', 'e', 'G', 'h', 'ħ', 'k', 'NA', 'F', 'R', 'me', 'mp', 'mn', 'u amu or Da',
            'ε0', '1/4πε0', 'μ0', 'R∞', 'a0'],
        conValue: ['299792458 m⋅s-1', '1.602176565(35)×10−19 C', '6.67384(80)×10-11 N⋅m2/kg2',
            '6.626070040(81)×10−34 J⋅s', '1.054571800(13)×10−34 J⋅s', '1.3806488(13)×10−23 J⋅K-1',
            '6.022140857(74)×1023 mol−1', '96485.3365(21) C⋅mol−1', '8.3144621(75) J⋅K−1⋅mol−1',
            '9.10938291(40)×10−31 kg', '1.672621777(74)×10−27 kg', '1.674927351(74)×10−27 kg',
            '1.660538921(73)×10−27 kg', '8.854187817×10−12 C2/N·m2', '8.9875517973681764×109 N⋅m2⋅C-2',
            '4π×10−7 N⋅A-2', '1.0973731568539(55)×10−7 m-1', '5.2917721092(17)×10−11 m']
    }
    render() {
        return (
            <div className="fullConatant">
                {
                    <table className='con-table-'>
                        <tr>
                            <th>Name</th>
                            <th>Symbol</th>
                            <th>Value</th>
                        </tr>
                        <tr>
                            <td>{this.state.conName[0]}</td>
                            <td>{this.state.conSmybol[0]}</td>
                            <td>{this.state.conValue[0]} %</td>
                        </tr>
                        <tr>
                            <td>{this.state.conName[1]}</td>
                            <td>{this.state.conSmybol[1]}</td>
                            <td>{this.state.conValue[1]} %</td>
                        </tr>
                        <tr>
                            <td>{this.state.conName[2]}</td>
                            <td>{this.state.conSmybol[2]}</td>
                            <td>{this.state.conValue[2]} %</td>
                        </tr>
                        <tr>
                            <td>{this.state.conName[3]}</td>
                            <td>{this.state.conSmybol[3]}</td>
                            <td>{this.state.conValue[3]} %</td>
                        </tr>
                        <tr>
                            <td>{this.state.conName[4]}</td>
                            <td>{this.state.conSmybol[4]}</td>
                            <td>{this.state.conValue[4]} %</td>
                        </tr>
                        <tr>
                            <td>{this.state.conName[5]}</td>
                            <td>{this.state.conSmybol[5]}</td>
                            <td>{this.state.conValue[5]} %</td>
                        </tr>
                        <tr>
                            <td>{this.state.conName[6]}</td>
                            <td>{this.state.conSmybol[6]}</td>
                            <td>{this.state.conValue[6]} %</td>
                        </tr>
                        <tr>
                            <td>{this.state.conName[7]}</td>
                            <td>{this.state.conSmybol[7]}</td>
                            <td>{this.state.conValue[7]} %</td>
                        </tr>
                        <tr>
                            <td>{this.state.conName[8]}</td>
                            <td>{this.state.conSmybol[8]}</td>
                            <td>{this.state.conValue[8]} %</td>
                        </tr>
                        <tr>
                            <td>{this.state.conName[9]}</td>
                            <td>{this.state.conSmybol[9]}</td>
                            <td>{this.state.conValue[9]} %</td>
                        </tr>
                        <tr>
                            <td>{this.state.conName[10]}</td>
                            <td>{this.state.conSmybol[10]}</td>
                            <td>{this.state.conValue[10]} %</td>
                        </tr>
                        <tr>
                            <td>{this.state.conName[11]}</td>
                            <td>{this.state.conSmybol[11]}</td>
                            <td>{this.state.conValue[11]} %</td>
                        </tr>
                        <tr>
                            <td>{this.state.conName[12]}</td>
                            <td>{this.state.conSmybol[12]}</td>
                            <td>{this.state.conValue[12]} %</td>
                        </tr>
                        <tr>
                            <td>{this.state.conName[13]}</td>
                            <td>{this.state.conSmybol[13]}</td>
                            <td>{this.state.conValue[13]} %</td>
                        </tr>
                        <tr>
                            <td>{this.state.conName[14]}</td>
                            <td>{this.state.conSmybol[14]}</td>
                            <td>{this.state.conValue[14]} %</td>
                        </tr>
                        <tr>
                            <td>{this.state.conName[15]}</td>
                            <td>{this.state.conSmybol[15]}</td>
                            <td>{this.state.conValue[15]} %</td>
                        </tr>
                        <tr>
                            <td>{this.state.conName[16]}</td>
                            <td>{this.state.conSmybol[16]}</td>
                            <td>{this.state.conValue[16]} %</td>
                        </tr>
                        <tr>
                            <td>{this.state.conName[17]}</td>
                            <td>{this.state.conSmybol[17]}</td>
                            <td>{this.state.conValue[17]} %</td>
                        </tr>
                    </table>
                }
            </div>);
    }
}




















export default Constant;