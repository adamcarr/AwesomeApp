using System;
using System.Collections.Generic;

namespace AwesomeApp.Models
{
    public interface ILecture : IIdentifiable
    {
        string Name { get; set; }
        string Description { get; set; }
        IList<Guid> AttendeeIds { get; set; }
    }
}