import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import Table from '../components/Table';

export default function Inbox() {
    return (
        <>
     
            <Topbar />
            <Sidebar />
            <div className="p-4 sm:ml-64">
                <div className="p-4 rounded-lg mt-14">
                    <div className="grid grid-cols-1 gap-4 mb-4">
                        <div className="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex items-center justify-between mb-4">
                                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Contact Us</h5>
                            </div>
                            <div className="flow-root">
                             

                                    <Table />

                            
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
