using System;
using System.Collections.Generic;

namespace AwesomeApp.Models
{
    public class Lecture : BaseIdentifiable, ILecture
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public IList<Guid> AttendeeIds { get; set; }
    }
}