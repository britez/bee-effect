import React from 'react';
import {Radar, RadarChart, ResponsiveContainer,
         PolarAngleAxis, Tooltip} from 'recharts';

const RadarCmp = ({data, stroke, fill, label, onClick}) => {

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx='50%' cy='50%' outerRadius='70%' data={data}>
        <Tooltip />
        <PolarAngleAxis dataKey="name" onClick={(event) => onClick(event.value)} radius={100}>
        </PolarAngleAxis>
        <Radar name="Total" dataKey="max" stroke="#dfdfdf" fill="#000000" fillOpacity={0} isAnimationActive={false} />
        <Radar name={label} dataKey='value' stroke={stroke} fill={fill} fillOpacity={0.6} isAnimationActive={true}/>
      </RadarChart>
    </ResponsiveContainer>
  )}
;

export default RadarCmp;
