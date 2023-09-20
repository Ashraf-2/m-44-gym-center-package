import { LineChart as LChart, Line,XAxis,YAxis,Tooltip } from 'recharts';

const LineCrt = () => {
    const studentData = [
        { id: 1, name: "John", mathMarks: 80,engMarks:66,physicsMarks: 75, },
        { id: 2, name: "Emily", mathMarks: 85,engMarks:66,physicsMarks: 65, },
        { id: 3, name: "Michael", mathMarks: 70,engMarks:66,physicsMarks: 35,},
        { id: 4, name: "Sarah", mathMarks: 92,engMarks:66,physicsMarks: 70, },
        { id: 5, name: "David ", mathMarks: 78,engMarks:66,physicsMarks: 95, },
        { id: 6, name: "Lee", mathMarks: 88,engMarks:66,physicsMarks: 95, },
        { id: 7, name: "James", mathMarks: 75,engMarks:66,physicsMarks: 15, },
        { id: 8, name: "Oliva", mathMarks: 95,engMarks:66,physicsMarks: 45, },
        { id: 9, name: "Daniel", mathMarks: 72,engMarks:66,physicsMarks: 85, },
        { id: 10, name: "Clark", mathMarks: 90,engMarks:66,physicsMarks: 55, }
      ];
            


    return (
        <div>
            <LChart  width={700} height={400} data={studentData}  margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <XAxis dataKey="name" ga></XAxis>
                <YAxis></YAxis>
                <Tooltip />
                <Line dataKey="mathMarks" stroke="black"></Line>
                <Line dataKey="engMarks" stroke='red'></Line>
                <Line dataKey="physicsMarks" stroke='blue'></Line>
            </LChart>
        </div>
    );
};

export default LineCrt;