export interface IPair {
	// date: string;
	// day_of_week: string;
	// number: number;
	// time: string;
	subject_name: string;
	sotr_fio: string;
	sotr_tabnum: number;
	norm_comment: string;
	method: string;
	mesto: string;
	group_name: string;
	subgroup_id: string;
	tech_info: ITechInfo;
}

export interface ITechInfo {
	group_id: number;
	pair_number: number;
	profile_id: number;
	subgroup_id: number;
	subject_id: number;
	timestamp: number;
}

export interface IPairGroup {
	number: number;
	time: string;
	pairs: IPair[];
}

export interface IDaySchedule {
	date: string;
	day_of_week: string;
	pairs: IPairGroup[];
}

