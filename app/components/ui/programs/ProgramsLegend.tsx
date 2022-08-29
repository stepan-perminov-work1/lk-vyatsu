import React, { memo } from 'react';
import { ProgramColors } from '../../../models/api/edu/programsTypes';
import BirdLogo from '../../shared/BirdLogo';

interface Props {
	colors: ProgramColors;
}

export const TypeColor = {
	universal: '#C0E2EF',
	common: '#FFF8B6',
	prof: '#C4EAAB',
	other: '#E9BBFF',
};

export default memo(function ProgramsLegend({ colors }: Props) {
	return (
		<>
			<div className="font-[500] text-[24px] mb-[15px]">
				Текущий учебный план
			</div>
			<div className="flex flex-col">
				{colors.used.map((colorType: string) => (
					<div key={colorType} className="flex items-center my-[10px]">
						<BirdLogo
						//@ts-ignore
							color={TypeColor[colorType] || ''}
							className="mr-[20px]"
						/>
						{/*@ts-ignore*/}
						<div>{colors.descriptions[colorType]}</div>
					</div>
				))}
			</div>
			<div className="font-[400] mt-[10px]">
				<span className="font-[600]">
					Зачетная еденица трудоемкости (ЗЕТ) -
				</span>{' '}
				единица трудоемкости учебной работы и других мероприятий в рамках
				образовательной программы
			</div>
		</>
	);
});
