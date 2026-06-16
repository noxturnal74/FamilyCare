import { Users, Calendar, Heart, Activity, Baby, Shield, Bell, ChevronRight } from 'lucide-react'

export default function FamilyCareHome() {
  const familyMembers = [
    { id: 1, name: 'Mom', age: 45, avatar: '👩', status: 'Healthy', color: 'bg-pink-100 dark:bg-pink-900/30' },
    { id: 2, name: 'Dad', age: 48, avatar: '👨', status: 'Check-up due', color: 'bg-blue-100 dark:bg-blue-900/30' },
    { id: 3, name: 'Emma', age: 12, avatar: '👧', status: 'Healthy', color: 'bg-purple-100 dark:bg-purple-900/30' },
    { id: 4, name: 'Jake', age: 8, avatar: '👦', status: 'Vaccine due', color: 'bg-amber-100 dark:bg-amber-900/30' },
  ]

  const upcomingAppointments = [
    { id: 1, member: 'Dad', type: 'Annual Check-up', date: 'Jun 20', doctor: 'Dr. Smith', color: 'bg-blue-50 dark:bg-blue-900/20' },
    { id: 2, member: 'Jake', type: 'Vaccination', date: 'Jun 25', doctor: 'Dr. Johnson', color: 'bg-amber-50 dark:bg-amber-900/20' },
    { id: 3, member: 'Emma', type: 'Dental Cleaning', date: 'Jul 3', doctor: 'Dr. Lee', color: 'bg-green-50 dark:bg-green-900/20' },
  ]

  const quickActions = [
    { icon: <Calendar size={24} />, label: 'Book Appointment', color: 'bg-[#007AFF]' },
    { icon: <Heart size={24} />, label: 'Health Records', color: 'bg-[#FF2D55]' },
    { icon: <Activity size={24} />, label: 'Vitals', color: 'bg-[#34C759]' },
    { icon: <Shield size={24} />, label: 'Insurance', color: 'bg-[#FF9500]' },
  ]

  return (
    <div className="min-h-screen bg-[#F2F2F7] dark:bg-[#000000]">
      <header className="bg-white dark:bg-[#1C1C1E] shadow-sm p-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FF9500] flex items-center justify-center">
              <Users className="text-white" size={22} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#000000] dark:text-[#FFFFFF]">FamilyCare</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">Family Health Hub</p>
            </div>
          </div>
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <Bell className="text-[#FF9500]" size={20} />
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 space-y-6">
        <section className="bg-gradient-to-br from-[#FF9500] to-[#FF6B00] rounded-2xl p-6 text-white">
          <h2 className="text-2xl font-bold mb-1">Family Health</h2>
          <p className="text-white/90 mb-4">3 members healthy · 1 check-up needed</p>
          <div className="flex gap-4">
            <div className="bg-white/20 rounded-xl px-4 py-2 text-center">
              <div className="text-2xl font-bold">4</div>
              <div className="text-xs text-white/80">Members</div>
            </div>
            <div className="bg-white/20 rounded-xl px-4 py-2 text-center">
              <div className="text-2xl font-bold">3</div>
              <div className="text-xs text-white/80">Upcoming</div>
            </div>
            <div className="bg-white/20 rounded-xl px-4 py-2 text-center">
              <div className="text-2xl font-bold">12</div>
              <div className="text-xs text-white/80">Records</div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-4 gap-3">
          {quickActions.map((action) => (
            <button key={action.label} className="bg-white dark:bg-[#1C1C1E] rounded-2xl shadow-sm p-4 flex flex-col items-center gap-2 hover:shadow-md transition-all">
              <div className={`w-12 h-12 rounded-full ${action.color} flex items-center justify-center text-white`}>
                {action.icon}
              </div>
              <span className="text-xs font-medium text-[#000000] dark:text-[#FFFFFF] text-center">{action.label}</span>
            </button>
          ))}
        </section>

        <section>
          <h3 className="text-lg font-bold mb-4 text-[#000000] dark:text-[#FFFFFF]">Family Members</h3>
          <div className="grid grid-cols-2 gap-4">
            {familyMembers.map((member) => (
              <div key={member.id} className={`rounded-2xl p-4 ${member.color}`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{member.avatar}</span>
                  <div>
                    <h4 className="font-bold text-[#000000] dark:text-[#FFFFFF]">{member.name}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Age {member.age}</p>
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${member.status === 'Healthy' ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400'}`}>
                  {member.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white dark:bg-[#1C1C1E] rounded-2xl shadow-sm p-6">
          <h3 className="text-lg font-bold mb-4 text-[#000000] dark:text-[#FFFFFF]">Upcoming Appointments</h3>
          <div className="space-y-3">
            {upcomingAppointments.map((appt) => (
              <div key={appt.id} className={`flex items-center gap-4 p-4 rounded-xl ${appt.color}`}>
                <div className="flex-1">
                  <h4 className="font-semibold text-[#000000] dark:text-[#FFFFFF]">{appt.member} — {appt.type}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{appt.date} · {appt.doctor}</p>
                </div>
                <ChevronRight className="text-gray-400" size={18} />
              </div>
            ))}
          </div>
          <button className="mt-4 w-full bg-[#FF9500] hover:bg-[#FF6B00] text-white font-bold py-3 rounded-xl transition-colors">
            + Add Appointment
          </button>
        </section>
      </main>
    </div>
  )
}