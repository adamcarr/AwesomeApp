using System;
using System.Web.Http.ValueProviders;

namespace AwesomeApp.Models
{
    public class BaseModelBinder
    {
        public string AssignValueIfNotNull(string propertyValue, IValueProvider provider, string key)
        {
            var result = provider.GetValue(key);
            if (result != null)
            {
                return result.AttemptedValue;
            }

            return propertyValue;
        }

        public Guid AssignValueIfNotNull(Guid propertyValue, IValueProvider provider, string key)
        {
            var result = provider.GetValue(key);
            if (result != null)
            {
                return Guid.Parse(result.AttemptedValue);
            }

            return propertyValue;
        }

        public int AssignValueIfNotNull(int propertyValue, IValueProvider provider, string key)
        {
            var result = provider.GetValue(key);
            if (result != null)
            {
                return int.Parse(result.AttemptedValue);
            }

            return propertyValue;
        }
    }
}