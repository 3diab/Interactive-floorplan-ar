
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useGLTF } from "@react-three/drei";


export function Ground(props) {

  const { nodes, materials } = useGLTF("./Models/Apartment.glb");
  return (
    <RigidBody {...props} type="fixed" colliders={false} >
      <group {...props} dispose={null} scale={0.0015} position={[0, -0.5, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} >
          <group rotation={[-Math.PI, 0, 0]}>
            <group position={[-79.54, 1415.11, -4299.85]} scale={10}>
              <mesh
                geometry={nodes.detal_0_6_vodootliv_0.geometry}
                material={materials.vodootliv}
                position={[7.95, -141.51, 429.98]}
              />
            </group>
            <group position={[163.55, -3896.24, 1252.14]} scale={10}>
              <mesh
                geometry={nodes["window_Material_#72_0"].geometry}
                material={materials.Material_72}
                position={[-16.35, 389.62, -125.21]}
              />
            </group>
            <group position={[-1877.66, 5556.57, 0.15]} scale={10}>
              <mesh
                geometry={nodes["bath_walls_Material_#39_0"].geometry}
                material={materials.Material_39}
                position={[187.77, -555.66, -0.02]}
              />
            </group>
            <group position={[-1560.59, -706.95, 40.03]} scale={10}>
              <mesh
                geometry={nodes["plinth_Material_#63_0"].geometry}
                material={materials.Material_63}
                position={[156.06, 70.69, -4]}
              />
            </group>
            <group position={[-1022.78, 2024.78, 986.86]} scale={10}>
              <mesh
                geometry={nodes.handle_06_Chrome1_0.geometry}
                material={materials.Chrome1}
                position={[102.28, -202.48, -98.69]}
              />
            </group>
            <group position={[-799.8, 2316.83, 724.83]} scale={9.9}>
              <mesh
                geometry={nodes.rakovina_Chrome_Satin_0.geometry}
                material={materials.Chrome_Satin}
                position={[79.98, -231.68, -72.48]}
              />
            </group>
            <group position={[214.78, 2621.9, 850.15]} scale={10}>
              <mesh
                geometry={nodes["detal_0_18_Material_#61_0"].geometry}
                material={materials.Material_61}
                position={[-21.48, -262.19, -85.02]}
              />
            </group>
            <group position={[-2574.92, 4317.8, -3135.71]} scale={10}>
              <mesh
                geometry={nodes["kitchen_stoleshn_Material_#60_0"].geometry}
                material={materials.Material_60}
                position={[257.49, -431.78, 313.57]}
              />
            </group>
            <group position={[191.01, 2591.35, 875.73]} scale={10}>
              <mesh
                geometry={nodes.kitchen_conf_Chrome1_0.geometry}
                material={materials.Chrome1}
                position={[-19.1, -259.13, -87.57]}
              />
            </group>
            <group position={[-807.92, 2474.39, 981]} scale={10}>
              <mesh
                geometry={nodes.kitchen_axor_stark_kitchen_Chrome1_0.geometry}
                material={materials.Chrome1}
                position={[80.79, -247.44, -98.1]}
              />
            </group>
            <group position={[-70.41, 2484.79, 1613.96]} scale={10}>
              <mesh
                geometry={nodes.kitchen_vitajka_Chrome1_0.geometry}
                material={materials.Chrome1}
                position={[7.04, -248.48, -161.4]}
              />
            </group>
            <group position={[-68.45, 2045.14, 452.54]} scale={10}>
              <mesh
                geometry={nodes.kithen_glass_plita_glass_0.geometry}
                material={materials.plita_glass}
                position={[6.85, -204.51, -45.25]}
              />
            </group>
            <group position={[-27.34, -4811.51, 1371.41]} scale={10}>
              <mesh
                geometry={nodes["outdoor_walls_Material_#40_0"].geometry}
                material={materials.Material_40}
                position={[2.73, 481.15, -137.14]}
              />
            </group>
            <group position={[-1877.66, 5556.57, 0.15]} scale={10}>
              <mesh
                geometry={nodes["outside_window_Material_#44_0"].geometry}
                material={materials.Material_44}
                position={[187.77, -555.66, -0.02]}
              />
            </group>
            <group position={[214.43, 3950.44, 0.58]} scale={10}>
              <mesh
                geometry={nodes.doorstep_def_0.geometry}
                material={materials.material}
                position={[-21.44, -395.04, -0.06]}
              />
            </group>
            <group position={[235.96, 3450.02, 772.52]} scale={10}>
              <mesh
                geometry={nodes["electric_Material_#42_0"].geometry}
                material={materials.Material_42}
                position={[-23.6, -345, -77.25]}
              />
            </group>
            <group position={[-1095.84, 1020.61, 1908.47]} scale={10}>
              <mesh
                geometry={nodes["lamp_above_table_Material_#43_0"].geometry}
                material={materials.Material_43}
                position={[109.58, -102.06, -190.85]}
              />
            </group>
            <group position={[-0.95, 969.3, 2730.73]} scale={10}>
              <mesh
                geometry={nodes.lampframe_ceeling01_def_0.geometry}
                material={materials.material}
                position={[0.09, -96.93, -273.07]}
              />
            </group>
            <group position={[-38.35, 752.43, -70.25]} scale={10}>
              <mesh
                geometry={nodes["walls_clear_Material_#38_0"].geometry}
                material={materials.Material_38}
                position={[3.83, -75.24, 7.03]}
              />
            </group>
            <group position={[204.63, 735, 0]} scale={10}>
              <mesh
                geometry={nodes["floor_Material_#57_0"].geometry}
                material={materials.Material_57}
                position={[-20.46, -73.5, 0]}
              />
            </group>
            <group position={[-364.01, 2185.06, 2389.39]} scale={10}>
              <mesh
                geometry={nodes["kitchen_clear_Material_#59_0"].geometry}
                material={materials.Material_59}
                position={[36.4, -218.51, -238.94]}
              />
            </group>
            <group position={[1.88, 735.19, 2737.23]} scale={10}>
              <mesh
                geometry={nodes["ceeling_Material_#50_0"].geometry}
                material={materials.Material_50}
                position={[-0.19, -73.52, -273.72]}
              />
            </group>
            <group position={[-603.72, -3542.5, 652.5]} scale={10}>
              <mesh
                geometry={nodes.Cylinder001_def_black_0.geometry}
                material={materials.def_black}
                position={[60.37, 354.25, -65.25]}
              />
            </group>
            <group position={[-603.68, -3542.3, 667.19]} scale={10}>
              <mesh
                geometry={nodes["thermohead_Material_#69_0"].geometry}
                material={materials.Material_69}
                position={[60.37, 354.23, -66.72]}
              />
            </group>
            <group position={[-588.03, -3542.65, 642.74]} scale={10}>
              <group position={[58.8, 354.26, -64.27]}>
                <mesh
                  geometry={nodes.ventil_metall_20_0.geometry}
                  material={materials.material_20}
                />
                <mesh
                  geometry={nodes.ventil_metall_Chrome_Satin_0.geometry}
                  material={materials.Chrome_Satin}
                />
              </group>
            </group>
            <group position={[-224.87, 3040.46, 869.61]} scale={10}>
              <mesh
                geometry={nodes.knopka_sliva_Chrome1_0.geometry}
                material={materials.Chrome1}
                position={[22.49, -304.05, -86.96]}
              />
            </group>
            <group position={[1756.87, 1156.45, 875.14]} scale={10}>
              <mesh
                geometry={nodes["stellaj2_Material_#66_0"].geometry}
                material={materials.Material_66}
                position={[-175.69, -115.65, -87.51]}
              />
            </group>
            <group position={[-308.5, 5011.29, 853.6]} scale={10}>
              <mesh
                geometry={nodes.oras_Chrome1_0.geometry}
                material={materials.Chrome1}
                position={[30.85, -501.13, -85.36]}
              />
            </group>
            <group position={[92.06, 4770.66, 1272.05]} scale={10}>
              <mesh
                geometry={nodes.sushilka_Chrome1_0.geometry}
                material={materials.Chrome1}
                position={[-9.21, -477.07, -127.21]}
              />
            </group>
            <group position={[-0.95, 969.3, 2736]} scale={10}>
              <mesh
                geometry={nodes.self_illum1_self_illum_0.geometry}
                material={materials.self_illum}
                position={[0.09, -96.93, -273.6]}
              />
            </group>
            <group position={[-128.29, -1296.44, 126.95]} scale={10}>
              <mesh
                geometry={nodes.stolik_stolik_0.geometry}
                material={materials.stolik}
                position={[12.83, 129.64, -12.7]}
              />
            </group>
            <group position={[-1055.78, 993.28, 0.13]} scale={10}>
              <mesh
                geometry={nodes["dining_table_Material_#52_0"].geometry}
                material={materials.Material_52}
                position={[105.58, -99.33, -0.01]}
              />
            </group>
            <group position={[-1095.84, 1020.61, 1908.47]} scale={10}>
              <mesh
                geometry={nodes.Object1738_ceramics_0.geometry}
                material={materials.ceramics}
                position={[109.58, -102.06, -190.85]}
              />
            </group>
            <group position={[-1402.08, 1002.76, 787.13]} scale={10}>
              <mesh
                geometry={nodes["Vaza_02_Material_#49_0"].geometry}
                material={materials.Material_49}
                position={[140.21, -100.28, -78.71]}
              />
            </group>
            <group position={[-463.69, 2412.92, 839.72]} scale={10}>
              <mesh
                geometry={nodes.chainik_Chrome1_0.geometry}
                material={materials.Chrome1}
                position={[46.37, -241.29, -83.97]}
              />
            </group>
            <group position={[-20.74, -1032.67, 349.67]} scale={10}>
              <mesh
                geometry={nodes["journal_Material_#58_0"].geometry}
                material={materials.Material_58}
                position={[2.07, 103.27, -34.97]}
              />
            </group>
            <group position={[219.74, -3410.95, 1397.41]} scale={10}>
              <mesh
                geometry={nodes["curtains_uvs_Material_#51_0"].geometry}
                material={materials.Material_51}
                position={[-21.97, 341.09, -139.74]}
              />
            </group>
            <group position={[1103.06, 5086.86, 985.41]} scale={10}>
              <mesh
                geometry={nodes["entrance_door_Material_#56_0"].geometry}
                material={materials.Material_56}
                position={[-110.31, -508.69, -98.54]}
              />
            </group>
            <group position={[-307.94, 5077.93, 1440.49]} scale={10}>
              <mesh
                geometry={nodes.mirror_mirror_0.geometry}
                material={materials.mirror}
                position={[30.79, -507.79, -144.05]}
              />
            </group>
            <group position={[-307.94, 5077.93, 1440.49]} scale={10}>
              <mesh
                geometry={nodes.mirror_frame_frame_of_mirror_0.geometry}
                material={materials.frame_of_mirror}
                position={[30.79, -507.79, -144.05]}
              />
            </group>
            <group position={[-583.23, 4680.89, 639.17]} scale={10}>
              <mesh
                geometry={nodes.chrome_details_Chrome1_0.geometry}
                material={materials.Chrome1}
                position={[58.32, -468.09, -63.92]}
              />
            </group>
            <group position={[-583.23, 4680.89, 639.17]} scale={10}>
              <mesh
                geometry={nodes.Object001732_def_0.geometry}
                material={materials.material}
                position={[58.32, -468.09, -63.92]}
              />
            </group>
            <group position={[-1195.46, 3874.98, 52.21]} scale={10}>
              <mesh
                geometry={nodes["Object002_Material_#46_0"].geometry}
                material={materials.Material_46}
                position={[119.55, -387.5, -5.22]}
              />
            </group>
            <group position={[191.01, 2591.35, 875.73]} scale={10}>
              <mesh
                geometry={nodes["Object1739_Material_#64_0"].geometry}
                material={materials.Material_64}
                position={[-19.1, -259.13, -87.57]}
              />
            </group>
            <group position={[1563.26, -413.04, 696.91]} scale={10}>
              <mesh
                geometry={nodes["Cloth_Shape001577_Material_#45_0"].geometry}
                material={materials.Material_45}
                position={[-156.33, 41.3, -69.69]}
              />
            </group>
            <group position={[1126.18, -2934.65, 2155.79]} scale={10}>
              <mesh
                geometry={nodes.provod_def_0.geometry}
                material={materials.material}
                position={[-112.62, 293.46, -215.58]}
              />
            </group>
            <group position={[1410.69, -3057.59, 1462.39]} scale={10}>
              <mesh
                geometry={nodes.Sphere233_def_0.geometry}
                material={materials.material}
                position={[-141.07, 305.76, -146.24]}
              />
            </group>
            <group position={[-80.63, -1471, 10]} scale={10}>
              <mesh
                geometry={nodes["Plane03_Material_#41_0"].geometry}
                material={materials.Material_41}
                position={[8.06, 146.93, -0.25]}
              />
            </group>
            <group position={[-1417.71, 1024.57, 835.14]} scale={10}>
              <mesh
                geometry={nodes.object_def_0.geometry}
                material={materials.material}
                position={[141.77, -102.46, -83.51]}
              />
            </group>
            <group position={[1966.55, -1293.66, 1778.52]} scale={10}>
              <mesh
                geometry={nodes["Ramki_2_Material_#35_0"].geometry}
                material={materials.Material_35}
                position={[-196.66, 129.37, -177.85]}
              />
            </group>
            <group position={[-36.87, 2298.61, 0]} scale={10}>
              <mesh
                geometry={nodes.Box8423_table_0.geometry}
                material={materials.table}
                position={[3.69, -229.86, 0]}
              />
            </group>
            <group position={[-191, 2033.39, 729.34]} scale={10}>
              <mesh
                geometry={nodes["Cylinder001_Material_#2097628050_0"].geometry}
                material={materials.Material_2097628050}
                position={[19.1, -203.34, -72.93]}
              />
            </group>
            <group position={[-270.66, 2235.31, 391.64]} scale={10}>
              <mesh
                geometry={nodes.Line035_Chrome1_0.geometry}
                material={materials.Chrome1}
                position={[27.07, -223.53, -39.16]}
              />
            </group>
            <group position={[84.69, 2033.38, 726.83]} scale={10}>
              <mesh
                geometry={nodes["Text005_Material_#82_0"].geometry}
                material={materials.Material_82}
                position={[-8.47, -203.34, -72.68]}
              />
            </group>
            <group position={[1989.08, -1311.9, 518.02]} scale={10}>
              <mesh
                geometry={nodes.Plane005_plane_za_divanom_0.geometry}
                material={materials.plane_za_divanom}
                position={[-198.91, 131.19, -51.8]}
              />
            </group>
            <group position={[-79.54, 1415.11, -4299.85]} scale={10}>
              <mesh
                geometry={nodes["otkosy001_Material_#62_0"].geometry}
                material={materials.Material_62}
                position={[7.95, -141.51, 429.98]}
              />
            </group>
            <group position={[168.96, -3911.11, 690.11]} scale={10}>
              <mesh
                geometry={nodes.Box8424_window_glass_0.geometry}
                material={materials.window_glass}
                position={[-16.9, 391.11, -69.01]}
              />
            </group>
            <group position={[-687.86, 2664.45, 0]} scale={10}>
              <mesh
                geometry={nodes.Box8425_def_0.geometry}
                material={materials.material}
                position={[68.79, -266.45, 0]}
              />
            </group>
            <group position={[327.76, -865.16, 2716.95]} scale={10}>
              <mesh
                geometry={nodes.kreplenie003_Chrome_Satin_0.geometry}
                material={materials.Chrome_Satin}
                position={[-32.78, 86.52, -271.7]}
              />
            </group>
            <group position={[-108.01, -1311.02, 3234.66]} scale={10}>
              <mesh
                geometry={nodes["Sphere237_Material_#2125638307_0"].geometry}
                material={materials.Material_2125638307}
                position={[10.8, 131.1, -323.47]}
              />
            </group>
            <group position={[1976.63, -1422.11, 2171.63]} scale={10}>
              <mesh
                geometry={nodes.Circle02_metall_light_0.geometry}
                material={materials.metall_light}
                position={[-197.66, 142.21, -217.16]}
              />
            </group>
            <group position={[-1568.06, -2503.79, 1044.37]} scale={10}>
              <mesh
                geometry={nodes.Box8418_Chrome_Satin_0.geometry}
                material={materials.Chrome_Satin}
                position={[156.81, 250.38, -104.44]}
              />
            </group>
            <group position={[-1349.9, -2503.09, 1150.28]} scale={10}>
              <mesh
                geometry={nodes.Cylinder025_20_0.geometry}
                material={materials.material_20}
                position={[134.99, 250.31, -115.03]}
              />
            </group>
            <group position={[1410.4, -3056.76, 1621.21]} scale={10}>
              <mesh
                geometry={nodes["lamp_ab_Material_#2125638286_0"].geometry}
                material={materials.Material_2125638286}
                position={[-141.04, 305.68, -162.12]}
              />
            </group>
            <group position={[1095.98, 5040.13, 2359.66]} scale={10}>
              <mesh
                geometry={
                  nodes.Yuciken_BATTHA_cap_Yuciken_BATTHA_fase_0.geometry
                }
                material={materials.Yuciken_BATTHA_fase}
                position={[-109.6, -504.01, -235.97]}
              />
            </group>
            <group position={[1095.98, 5044.66, 2359.66]} scale={10}>
              <mesh
                geometry={nodes["Yuciken_BATTHA_base_Material_#73_0"].geometry}
                material={materials.Material_73}
                position={[-109.6, -504.47, -235.97]}
              />
            </group>
            <group position={[-1602.3, -1306.5, 1326.08]} scale={10}>
              <mesh
                geometry={nodes["Box008_Material_#71_0"].geometry}
                material={materials.Material_71}
                position={[160.23, 130.65, -132.61]}
              />
            </group>
            <group position={[-1481.72, -1306.5, 1326.08]} scale={10}>
              <mesh
                geometry={nodes["tv_glass_Material_#70_0"].geometry}
                material={materials.Material_70}
                position={[148.17, 130.65, -132.61]}
              />
            </group>
            <group position={[-1101.49, 1450.8, 400]} scale={10}>
              <mesh
                geometry={nodes["stul_sidenie001_Material_#67_0"].geometry}
                material={materials.Material_67}
                position={[110.15, -145.08, -40]}
              />
            </group>
            <group position={[-1101.49, 1450.8, 409.83]} scale={10}>
              <mesh
                geometry={nodes.chair001_Chrome1_0.geometry}
                material={materials.Chrome1}
                position={[110.15, -145.08, -40.98]}
              />
            </group>
            <group position={[-1195.42, 3509.54, 2259.36]} scale={10}>
              <mesh
                geometry={nodes.Sphere232_Chrome1_0.geometry}
                material={materials.Chrome1}
                position={[119.54, -350.95, -225.94]}
              />
            </group>
            <group position={[-1112.14, 506.26, 400]} scale={10}>
              <mesh
                geometry={nodes["stul_sidenie_Material_#68_0"].geometry}
                material={materials.Material_68}
                position={[111.21, -50.63, -40]}
              />
            </group>
            <group position={[-1112.14, 506.26, 409.83]} scale={10}>
              <mesh
                geometry={nodes.chair_Chrome1_0.geometry}
                material={materials.Chrome1}
                position={[111.21, -50.63, -40.98]}
              />
            </group>
            <group position={[-805.26, -2649.42, 136.66]} scale={10}>
              <mesh
                geometry={nodes["armchair_Material_#36_0"].geometry}
                material={materials.Material_36}
                position={[80.53, 264.94, -13.67]}
              />
            </group>
            <group position={[1573.58, 38.65, 558.92]} scale={10}>
              <mesh
                geometry={nodes["divan_brown_leather_Material_#48_0"].geometry}
                material={materials.Material_48}
                position={[-157.36, -3.87, -55.89]}
              />
            </group>
            <group position={[-1432.17, -2899.72, 0.44]} scale={10}>
              <mesh
                geometry={nodes.Cylinder19_black_plastic_0.geometry}
                material={materials.black_plastic}
                position={[143.22, 289.97, -0.04]}
              />
            </group>
            <group position={[-1076.02, -2412.55, 12.16]} scale={10}>
              <mesh
                geometry={nodes.Cylinder14_Chrome1_0.geometry}
                material={materials.Chrome1}
                position={[107.6, 241.26, -1.22]}
              />
            </group>
            <group position={[1762.97, -1303.4, 324.58]} scale={10}>
              <mesh
                geometry={nodes["divan_white_cotton_Material_#54_0"].geometry}
                material={materials.Material_54}
                position={[-176.3, 130.34, -32.46]}
              />
            </group>
            <group position={[1483.3, -1304.31, 14.76]} scale={10}>
              <mesh
                geometry={nodes.obj_03_Chrome1_0.geometry}
                material={materials.Chrome1}
                position={[-148.33, 130.43, -1.48]}
              />
            </group>
            <group position={[2205.18, 4062.16, -62.71]} scale={10}>
              <mesh
                geometry={nodes["door_bath1_Material_#55_0"].geometry}
                material={materials.Material_55}
                position={[-220.52, -406.22, 6.27]}
              />
            </group>
            <group position={[2141.04, 4611.03, -57.1]} scale={10}>
              <mesh
                geometry={nodes.AM109_031_01_Chrome1_0.geometry}
                material={materials.Chrome1}
                position={[-214.1, -461.1, 5.71]}
              />
            </group>
            <group position={[1505.28, 4653, 949.33]} scale={10}>
              <mesh
                geometry={nodes.zamok_01_Chrome1_0.geometry}
                material={materials.Chrome1}
                position={[-150.53, -465.3, -94.93]}
              />
            </group>
            <group position={[-177.17, -3541.74, 595.62]} scale={10}>
              <mesh
                geometry={
                  nodes["radiator_inside2_Material_#2125638305_0"].geometry
                }
                material={materials.Material_2125638305}
                position={[17.72, 354.17, -59.56]}
              />
            </group>
            <group position={[-178.29, -3538.63, 430.87]} scale={10}>
              <mesh
                geometry={nodes["radiator_polymesh_Material_#65_0"].geometry}
                material={materials.Material_65}
                position={[17.83, 353.86, -43.09]}
              />
            </group>
            <group position={[1410.4, -3057.48, 899.12]} scale={10}>
              <mesh
                geometry={nodes.lamp_chrome_Chrome_Satin_0.geometry}
                material={materials.Chrome_Satin}
                position={[-141.04, 305.75, -89.91]}
              />
            </group>
          </group>
        </group>
      </group>
      <CuboidCollider args={[1000, 2, 1000]} position={[0, -2, 0]} />
    </RigidBody>
  );
}