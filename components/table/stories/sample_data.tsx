export interface Person {
    id: string; // 唯一标识符
    name: string;
    age: number;
    status: string;
    visits: number;
    progress: number;
    avatar?: string; // 可选字段
}

export const sampleData: Person[] = [
    {
        id: '1',
        name: 'John Doe',
        age: 28,
        status: 'Active',
        visits: 100,
        progress: 50,
    },
    {
        id: '2',
        name: 'Jane Smith',
        age: 34,
        status: 'Inactive',
        visits: 50,
        progress: 80,
    },
    {
        id: '3',
        name: 'Alice Johnson',
        age: 45,
        status: 'Active',
        visits: 200,
        progress: 20,
    },
    // 更多数据...
];