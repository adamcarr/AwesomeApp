using System;

namespace AwesomeApp.Models
{
    public class Attendee : BaseIdentifiable, IAttendee
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}