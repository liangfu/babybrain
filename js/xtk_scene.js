/*
 * This is the entry point
 */

 
var _ATLAS_ = {};
_ATLAS_.steps = [0.14, 41, 80];
_ATLAS_.volumes = new Array(_ATLAS_.steps.length);
_ATLAS_.meshes = [0.14, 41, 80];
_ATLAS_.currentVolume = 0;
_ATLAS_.volumesLoaded = false;
_ATLAS_.currentMesh = 0;
_ATLAS_.meshOpacity = 0.9;
_ATLAS_.labelOpacity = 0.5;
_ATLAS_.hover = null;
_ATLAS_.hoverLabelSelect = true;
_ATLAS_.atlasLoop = null;
_ATLAS_.infoWindow = null;

// create dictionary "label name" : "label value"
_ATLAS_.labels = {
	"Precentral_L": 1,
	"Precentral_R": 2,
"Frontal_Sup_L":3 ,
"Frontal_Sup_R":4 ,
"Frontal_Sup_Orb_L":5 ,
"Frontal_Sup_Orb_R":6 ,
"Frontal_Mid_L":7 ,
"Frontal_Mid_R":8 ,
"Frontal_Mid_Orb_L":9 ,
"Frontal_Mid_Orb_R":10 ,
"Frontal_Inf_Oper_L":11 ,
"Frontal_Inf_Oper_R":12 ,
"Frontal_Inf_Tri_L":13 ,
"Frontal_Inf_Tri_R":14 ,
"Frontal_Inf_Orb_L":15 ,
"Frontal_Inf_Orb_R":16 ,
"Rolandic_Oper_L":17 ,
"Rolandic_Oper_R":18 ,
"Supp_Motor_Area_L":19 ,
"Supp_Motor_Area_R":20 ,
"Olfactory_L":21 ,
"Olfactory_R":22 ,
"Frontal_Sup_Medial_L":23 ,
"Frontal_Sup_Medial_R":24 ,
"Frontal_Med_Orb_L":25 ,
"Frontal_Med_Orb_R":26 ,
"Rectus_L":27 ,
"Rectus_R":28 ,
"Insula_L":29 ,
"Insula_R":30 ,
"Cingulum_Ant_L":31 ,
"Cingulum_Ant_R":32 ,
"Cingulum_Mid_L":33 ,
"Cingulum_Mid_R":34 ,
"Cingulum_Post_L":35 ,
"Cingulum_Post_R":36 ,
"Hippocampus_L":37 ,
"Hippocampus_R":38 ,
"ParaHippocampal_L":39 ,
"ParaHippocampal_R":40 ,
"Amygdala_L":41 ,
"Amygdala_R":42 ,
"Calcarine_L":43 ,
"Calcarine_R":44 ,
"Cuneus_L":45 ,
"Cuneus_R":46 ,
"Lingual_L":47 ,
"Lingual_R":48 ,
"Occipital_Sup_L":49 ,
"Occipital_Sup_R":50 ,
"Occipital_Mid_L":51 ,
"Occipital_Mid_R":52 ,
"Occipital_Inf_L":53 ,
"Occipital_Inf_R":54 ,
"Fusiform_L":55 ,
"Fusiform_R":56 ,
"Postcentral_L":57 ,
"Postcentral_R":58 ,
"Parietal_Sup_L":59 ,
"Parietal_Sup_R":60 ,
"Parietal_Inf_L":61 ,
"Parietal_Inf_R":62 ,
"SupraMarginal_L":63 ,
"SupraMarginal_R":64 ,
"Angular_L":65 ,
"Angular_R":66 ,
"Precuneus_L":67 ,
"Precuneus_R":68 ,
"Paracentral_Lobule_L":69 ,
"Paracentral_Lobule_R":70 ,
"Caudate_L":71 ,
"Caudate_R":72 ,
"Putamen_L":73 ,
"Putamen_R":74 ,
"Pallidum_L":75 ,
"Pallidum_R":76 ,
"Thalamus_L":77 ,
"Thalamus_R":78 ,
"Heschl_L":79 ,
"Heschl_R":80 ,
"Temporal_Sup_L":81 ,
"Temporal_Sup_R":82 ,
"Temporal_Pole_Sup_L":83 ,
"Temporal_Pole_Sup_R":84 ,
"Temporal_Mid_L":85 ,
"Temporal_Mid_R":86 ,
"Temporal_Pole_Mid_L":87 ,
"Temporal_Pole_Mid_R":88 ,
"Temporal_Inf_L":89 ,
"Temporal_Inf_R":90 ,
"Cerebelum_Crus1_L":91 ,
"Cerebelum_Crus1_R":92 ,
"Cerebelum_Crus2_L":93 ,
"Cerebelum_Crus2_R":94 ,
"Cerebelum_3_L":95 ,
"Cerebelum_3_R":96 ,
"Cerebelum_4_5_L":97 ,
"Cerebelum_4_5_R":98 ,
"Cerebelum_6_L":99 ,
"Cerebelum_6_R":100 ,
"Cerebelum_7b_L":101 ,
"Cerebelum_7b_R":102 ,
"Cerebelum_8_L":103 ,
"Cerebelum_8_R":104 ,
"Cerebelum_9_L":105 ,
"Cerebelum_9_R":106 ,
"Cerebelum_10_L":107 ,
"Cerebelum_10_R":108 ,
"Vermis_1_2":109 ,
"Vermis_3":110 ,
"Vermis_4_5":111 ,
"Vermis_6":112 ,
"Vermis_7":113 ,
"Vermis_8":114 ,
"Vermis_9 9160":115 ,
"Vermis_10 9170":116 


  // "Accumbens area": 26,
  // "Amygdala": 18,
  // "Caudate": 11,
  // "Cerebellum Cortex": 8,
  // "Cerebral Cortex": 3,
  // "Hippocampus": 17,
  // "Lateral Ventricle": 4,
  // "Medulla": 175,
  // "Midbrain": 173,
  // "Pallidum": 13,
  // "Pons": 174,
  // "Putamen": 12,
  // "Thalamus": 9,
  // "Ventral DC": 28,
  // "Vermis": 172,
  // "3rd Ventricle": 14,
  // "4th Ventricle": 15
};


// setup mesh cache
for (m in _ATLAS_.meshes) {

	var _meshes = [
        "Model_1_Precentral_L.vtk"
        "Model_2_Precentral_R.vtk",
        "Model_3_Frontal_Sup_L.vtk",
        "Model_4_Frontal_Sup_R.vtk",
        "Model_5_Frontal_Sup_Orb_L.vtk",
        "Model_6_Frontal_Sup_Orb_R.vtk",
        "Model_7_Frontal_Mid_L.vtk",
        "Model_8_Frontal_Mid_R.vtk",
        "Model_9_Frontal_Mid_Orb_L.vtk"
		// "Model_1_Left-Frontal-Medial.vtk",
		// "Model_2_Right-Frontal-Medial.vtk"
		// "Model_26_Left-Accumbens-area.vtk",
		// "Model_18_Left-Amygdala.vtk",
		// "Model_11_Left-Caudate.vtk",
		// "Model_8_Left-Cerebellum-Cortex.vtk",
		// "Model_3_Left-Cerebral-Cortex.vtk",
		// "Model_17_Left-Hippocampus.vtk",
		// "Model_4_Left-Lateral-Ventricle.vtk ",
		// "Model_13_Left-Pallidum.vtk",
		// "Model_12_Left-Putamen.vtk",
		// "Model_9_Left-Thalamus.vtk",
		// "Model_28_Left-VentralDC.vtk",

		// "Model_58_Right-Accumbens-area.vtk",
		// "Model_54_Right-Amygdala.vtk",
		// "Model_50_Right-Caudate.vtk",
		// "Model_47_Right-Cerebellum-Cortex.vtk",
		// "Model_42_Right-Cerebral-Cortex.vtk",
		// "Model_53_Right-Hippocampus.vtk",
		// "Model_43_Right-Lateral-Ventricle.vtk ",
		// "Model_52_Right-Pallidum.vtk",
		// "Model_51_Right-Putamen.vtk",
		// "Model_48_Right-Thalamus.vtk",
		// "Model_60_Right-VentralDC.vtk",

		// "Model_175_Medulla.vtk",
		// "Model_173_Midbrain.vtk",
		// "Model_174_Pons.vtk",
		// "Model_172_Vermis.vtk",
		// "Model_14_3rd-Ventricle.vtk",
		// "Model_15_4th-Ventricle.vtk"
	];

	_ATLAS_.meshes[m] = new Array(_meshes.length);
	for (var i=0; i<_meshes.length;i++) {
		var _currentMesh = jQuery.trim(_meshes[i]);
		_ATLAS_.meshes[m][_currentMesh]  = null;
	}

}



sliceX = null;
sliceY = null;
sliceZ = null;

$(function() {

	// initialize with the MRI volume with the youngest dataset
	var volume = new X.volume();
	volume.file = 'data/0.14/volume.nii.gz';
	volume.labelmap.file = 'data/0.14/labelmap.nii.gz';
	volume.labelmap.colortable.file = 'data/colortable.txt';
	volume.labelmap.opacity = 0;
	_ATLAS_.volumes[_ATLAS_.currentVolume] = volume;

	// 3D rendering
	r0 = new X.renderer3D();
	r0.container = '3d';
	r0.config.INTERMEDIATE_RENDERING = true;
	r0.init();
	r0.add(volume);
	r0.camera.position = [ 0, 0, -200 ]; //
	r0.camera.up = [0, 1, 0];
	r0.onShowtime = function() {
		init_viewer3d();
		init_viewer2d();
		scene_picking();
	};
	r0.render();


});
