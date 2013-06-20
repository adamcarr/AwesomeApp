using System;
using System.Net.Http.Formatting;

namespace AwesomeApp.Models
{
    public class ILectureTypeFormatter : JsonMediaTypeFormatter
    {
        public override bool CanReadType(Type type)
        {
            return type == typeof(ILecture);
        }

        public override bool CanWriteType(Type type)
        {
            return type == typeof(ILecture);
        }
    }
}