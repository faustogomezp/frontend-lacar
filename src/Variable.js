export const Variable = ({FECHA, ENT1_FALLA_1, ENT3_AUT_1, ENT4_CERR_1, ENT5_ABIER_1,
ENT6_FALLA_2, ENT8_AUT_2, ENT2_1_CERR_2HMI, ENT2_2_ABIER_2HMI, ENT2_3_FALL_3,
ENT2_5_AUTO_3, ENT2_6_CERR_3, ENT2_7_ABIER_3}) =>{
    return (
        <tr>
            <td>{FECHA}</td>
            <td>{ENT1_FALLA_1}</td>
            <td>{ENT3_AUT_1}</td>
            <td>{ENT4_CERR_1}</td>
            <td>{ENT5_ABIER_1}</td>
            <td>{ENT6_FALLA_2}</td>
            <td>{ENT8_AUT_2}</td>
            <td>{ENT2_1_CERR_2HMI}</td>
            <td>{ENT2_2_ABIER_2HMI}</td>
            <td>{ENT2_3_FALL_3}</td>
            <td>{ENT2_5_AUTO_3}</td>
            <td>{ENT2_6_CERR_3}</td>
            <td>{ENT2_7_ABIER_3}</td>
        </tr>
    )
}